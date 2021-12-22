import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GameConsoleComponent } from "./game-console/game-console.component";
import { GamelistComponent } from "./games/gamelist/gamelist.component";
import { GamesComponent } from "./games/games.component";
import { HeaderComponent } from "./header/header.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";

// localhost:4200/
const routes: Routes = [
  {
   path: '',
   redirectTo: 'game-console',
   pathMatch: 'full'
  },
  { path: 'shopping-cart',
    component: ShoppingCartComponent
  },
  {
    path: 'game-console',
    component: GameConsoleComponent
  },
  {
    path: 'gamelist',
    component: GamelistComponent
  },
  {
    path: 'games',
    component: GamesComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
