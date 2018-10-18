import React, { Component } from "react";
import { GlobalStyle } from "./UIComponents/Styles";
import { LazyPortfolio, Game, Placeholder } from "./UIComponents/Portfolio";
import { SearchForm } from "./UIComponents/Search";
import { Header, Page } from "./UIComponents/Layout";
import { Modal } from "./UIComponents/Modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: this.addKeys(this.props.games),
      favorites: {},
      search: "",
      filters: {
        favorites: {
          active: false,
          counter: () => Object.keys(this.state.favorites).length
        }
      },
      selectedGame: null
    };
  }
  /* method to create associative array with keys */
  /* would be useful when have to filter favorite games */
  addKeys = array =>
    array.reduce(
      (obj, item, index) => ({
        ...obj,
        [index]: item
      }),
      {}
    );

  addFavorite = ([key, game]) => ({
    ...this.state.favorites,
    [key]: game
  });

  removeFavorite = ([key, game]) => {
    const { [key]: deleted, ...favorites } = this.state.favorites;
    return favorites;
  };

  toggleFavorite = game => {
    const key = game[0];
    const favorites = !!this.state.favorites[key]
      ? this.removeFavorite(game)
      : this.addFavorite(game);

    this.setState({ favorites });
  };

  showGame = game => this.setState({ selectedGame: game });
  
  hideGame = () => this.setState({ selectedGame: null });
  
  onSearchChange = event => this.setState({ search: event.target.value.toUpperCase() });

  toggleFilter = filter => {
    const filters = {
      ...this.state.filters,
      [filter]: {
        ...this.state.filters[filter],
        active: !this.state.filters[filter].active
      }
    };
    this.setState({ filters });
  };

  render() {
    /* we choose here which portfolio to show ( all games or our favorites) */
    const portfolio = this.state.filters.favorites.active
      ? this.state.favorites
      : this.state.games;
      
    const isModalOpen = !!this.state.selectedGame;
    /* we filter here by search typing */
    const games = Object.entries(portfolio).filter(([key, game]) =>
      game.name.toUpperCase().includes(this.state.search)
    );

    return (
      <div>
        <GlobalStyle noscroll={isModalOpen} />
        <Page blur={isModalOpen}>
          <Header>
            <SearchForm
              search={this.state.search}
              onSearchChange={this.onSearchChange}
              filters={this.state.filters}
              onFilter={filter => this.toggleFilter(filter)}
            />
          </Header>

          <LazyPortfolio
            data={games}
            PlaceHolder={Placeholder}
            renderItem={([keyGame,game]) => (
              <Game
                {...game}
                key={keyGame}
                toggleFavorite={e => {
                  e.stopPropagation();
                  this.toggleFavorite([keyGame,game]);
                }}
                isFavorite={!!this.state.favorites[keyGame]}
                onClick={e => this.showGame([keyGame,game])}
              />
            )}
          />
        </Page>
        <Modal isOpen={isModalOpen} onClose={() => this.hideGame()}>
          {this.state.selectedGame && (
            <Game
              fullpage
              {...this.state.selectedGame[1]}
              isFavorite={!!this.state.favorites[this.state.selectedGame[0]]}
              toggleFavorite={e => this.toggleFavorite(this.state.selectedGame)}
            />
          )}
        </Modal>
      </div>
    );
  }
}

export default App;
