# Game List App

Install node modules :
```shell
  yarn install
```

start ( run client on 3000 ):
```shell
  yarn start
```

build client:
```shell
  yarn build
```

# Use:

This App show a list of King games.
  
# App

For the App, I build a UI Library & Lazy Components


# Choices

I used create-react-app as a starter.
I choose to not use redux because it's a small app.
I used styled-components for CSS design & Font-awesome for icons.
It's a single page app. There is no routing handler. The game view is treated as a pop-up modal. Favorite page as a search filter.
I try to make the components reusable as portfolio can render every box he wants using 'render props'. 
Filters could be implemented easily in the SearchForm too.

# Architecture App

For building my favorites:

I first create keys for all of my games.
And I store the all object (key, game) in a new object when I add a game to my favorites.
So when I have to filter my all games to see if they are in my favorites I just have to see in my favorites Object if the key exist.
And to show my favorites, I just have to look in this new Object.

We could just add a favorite attribute for each game and filter the list by him, it would end up in a cleaner and easier readable app but it would be less performant. 

# Lazy Components

I build a tiny LazyLoad library regarding performance. 
Basically it will load elements when they are visible.

- there is an HOC which add a scoll Listener : 
  We will attach this HOC to the portfolio and give his position to his children for only attaching one event to window.
- a LazyImage Component to handle smoothly how images are loaded.
- LazyComponent is a component which load his children only if they are in the viewport. If not he loads a placeholder.

# UI Components

to display the list, I used flexbox mainly.
I used a new feature from styled-components ( it's in beta ) to design body element ( createGlobalStyle ).
The Game component has to display mode : box & fullpage ( in the modal )
Portfolio can render standard or lazy items regarding scroll event is attached. 
Both are exported so feel free to see the differences.

