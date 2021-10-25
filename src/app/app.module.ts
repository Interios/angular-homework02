import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GamemanagerComponent } from './gamemanager/gamemanager.component';
import { GameactorComponent } from './gameactor/gameactor.component';

@NgModule({
  declarations: [
    AppComponent,
    GamemanagerComponent,
    GameactorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
