# Memory Game

This is a web-based implementation of the classic memory game, in which the player is presented with a grid of cards, and must flip them over to reveal matching pairs. The game is built using React and Redux.

## Live Demo

You can check out a live demo of the app at https://my-memory-game.vercel.app/. 

## How to Use

1. To begin, select the grid size you want to play with (4x4 or 6x6), select the number of players (1-4) and whether you want to match numbers or icons, and click the "Start Game" button.
2. Click on two cards to reveal what is underneath.
3. If the two cards match, they will stay face up. If they do not match, they will flip back over.
4. Continue playing until all cards have been matched.
5. Try to match all the cards in as few moves as possible to earn a higher score.

## Features

- 16 cards (4x4) or 36 cards (6x6), representing 8 or 18 pairs of matching images.
- Up to 4 players can play the game.
- Players can select whether they want to match numbers or icons.
- A timer that starts when the game begins and stops when all cards have been matched.
- A moves counter that tracks the number of moves made by the player.
- A reset button to restart the game at any time.
- A modal that pops up when the game is over, displaying the player's score and allowing them to play again.

## Running the App Locally

To run the app locally, follow these steps:

1. Clone the repository to your local machine using the following command:
````
git clone https://github.com/adam-belahouane/memory-game.git
````
2. Navigate to the project directory:
````
cd dictionary-web-app
````
3. Install the required dependencies:
````
npm install
````
4. Start the app:
````
npm start
````
