import { Injectable } from "@angular/core";
import { Game } from "src/app/shared/game.model";

@Injectable({ providedIn: 'root'})
export class GameListService {
  private myGames: Game[] = [
    {
      title: 'Mortal Kombat',
      company: 'Midway',
      genre: 'Fighting',
      coverImagePath: 'https://gonintendo.com/uploads/file_upload/upload/64200/ezgif-1-7bacdbadffad.jpg',
      price: 49.99
    },
    {
      title: 'Super Mario Bros.',
      company: 'Nintendo',
      genre: 'Platform',
      coverImagePath: 'https://cdn.vox-cdn.com/thumbor/5nxoH-V1mXUOUeGXIO_sKH3Ycys=/75x0:885x540/920x613/filters:focal(75x0:885x540):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/33974873/super_mario_bros.0.png',
      price: 39.99
    },
    {
      title: 'Sonic the Hedgehog',
      company: 'Sega',
      genre: 'Platform',
      coverImagePath: 'https://www.video-games-museum.com/en/screenshots/GameBoy%20Advance/3/56332-ingame-Sonic-The-Hedgehog-Genesis.jpg',
      price: 35.99
    },
];

getGames() {
  return this.myGames.slice()
}
}
