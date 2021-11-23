import { Component, OnDestroy, OnInit } from '@angular/core';
import { Game } from 'src/app/shared/game.model';
import { GameListService } from './gamelist.service';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.css']
})
export class GamelistComponent implements OnInit {
  games: Game [] = [];
  gameInfo;
  alertDetails: string;
  constructor(private gamelistService: GameListService) {}

  ngOnInit(): void {
    this.games = this.gamelistService.getGames()
  }

  onDetails(game) {
    this.gameInfo = game
  }

  onClose() {
    this.gameInfo = null
  }


  }


