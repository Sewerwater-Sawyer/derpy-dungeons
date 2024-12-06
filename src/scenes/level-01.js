import Phaser from "phaser";
import { IMAGES, SCENES } from "../constants";

export class Level01 extends Phaser.Scene {
	constructor() {
		super({ key: SCENES.level01 });
	}

	preload() {
		this.load.tilemapTiledJSON("level-01", "/tilemaps/level-01.json");
	}

	create() {
		const map = this.make.tilemap({
			key: "level-01",
			tileHeight: 16,
			tileWidth: 16,
		});

		const floorTiles = map.addTilesetImage("floors", IMAGES.floor);
		const floorLayer = map.createLayer("floor", floorTiles);

		const wallTiles = map.addTilesetImage("low-walls", IMAGES.walls);
		const wallLayer = map.createLayer("wall", wallTiles);

		const decorTiles = map.addTilesetImage("high-walls", IMAGES.decor);
		const decortLayer = map.createLayer("decor", decorTiles);

		//this.cameras.main.setOrigin(50, 50);
		this.cameras.main.zoom = 3;
	}
}