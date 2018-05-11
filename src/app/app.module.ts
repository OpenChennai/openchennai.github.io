import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

library.add(faTwitter);
library.add(faFacebook);
library.add(faInstagram);
library.add(faGithub);

@NgModule({
  declarations: [
    AppComponent,
    LeaderboardComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
