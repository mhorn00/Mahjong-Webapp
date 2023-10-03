/*
Mahjong engine:
- keep track of current game state
        - all player hands
        - discard pile
        - current player
        - 
- provide functions to update game state

*/
import {TotalTiles, TotalUniqueTiles, MahjongSuits, MahjongTiles} from './MahjongTiles';

class MahjongEngine {
	playerCount = 0;
	playerHands = [[], [], [], []];
	discardPile = [];
	drawPile = [[], [], [], []];
	currentPlayer = 0;
	dealerPlayer = 0;

	constructor(playerCount) {
		this.playerCount = playerCount;
		this.dealerPlayer = 0;
	}

	initDrawPile() {
		let tileShuffle = [];
		let tileCounts = {};
		while (tileShuffle.length < TotalTiles) {
			let tile = MahjongTiles[Math.floor(Math.random() * TotalUniqueTiles)];
		}
		this.drawPile = [tileShuffle.slice(0, 13), tileShuffle.slice(13, 26), tileShuffle.slice(26, 39), tileShuffle.slice(39, 52)];
	}
}
