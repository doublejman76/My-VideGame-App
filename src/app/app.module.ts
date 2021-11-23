import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GameConsoleComponent } from './game-console/game-console.component';
import { GamesComponent } from './games/games.component';
import { HeaderComponent } from './header/header.component';
import { PlaygameComponent } from './game-console/playgame/playgame.component';
import { GamelistComponent } from './games/gamelist/gamelist.component';
import { AppRoutingModule } from './app-routing.module';
import { AlertDetailsComponent } from './alert-details/alert-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';





@NgModule({
  declarations: [
    AppComponent,
    GameConsoleComponent,
    GamesComponent,
    HeaderComponent,
    PlaygameComponent,
    GamelistComponent,
    AlertDetailsComponent,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}






