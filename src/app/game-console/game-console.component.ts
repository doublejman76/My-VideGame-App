import { Component, OnInit } from '@angular/core';
import { Console } from '../shared/console.model';
import { ConsoleService } from './console.service';

@Component({
  selector: 'app-game-console',
  templateUrl: './game-console.component.html',
  styleUrls: ['./game-console.component.css']
})
export class GameConsoleComponent implements OnInit {
  consoles: Console [] = [];
  consoleInfo;
  alertDetails: string;
  constructor(private consoleService: ConsoleService) { }

  ngOnInit(): void {
    console.log(this.consoleService.getConsoles())
    this.consoles = this.consoleService.getConsoles()
  }

  onDetails(console) {
    this.consoleInfo = console
  }

  onClose() {
    this.consoleInfo = null
  }

}
