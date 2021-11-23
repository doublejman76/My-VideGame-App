import { Injectable } from "@angular/core";
import { Console } from "../shared/console.model";

@Injectable({ providedIn: 'root' })
export class ConsoleService {
  private myConsoles: Console[] = [
    {
      title: 'Nintendo Entertainment System',
      company: 'Nintendo',
      yearCreated: 1985,
      coverImagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/NES-Console-Set.jpg/1200px-NES-Console-Set.jpg',
      price: 199.99
    },
    {
      title: 'Sega Genesis',
      company: 'Sega of America',
      yearCreated: 1990,
      coverImagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Sega-Genesis-Mod1-Set.png/1200px-Sega-Genesis-Mod1-Set.png',
      price: 249.99
    },
    {
      title: 'Sony Playstation',
      company: 'Sony of America',
      yearCreated: 1995,
      coverImagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PSX-Console-wController.jpg/1200px-PSX-Console-wController.jpg',
      price: 299.99
    }
  ];

  getConsoles() {
    return this.myConsoles.slice()
  }
}
