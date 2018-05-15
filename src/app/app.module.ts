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
import { HomeComponent } from './home/home.component';
import { IssueFormComponent } from './issue-form/issue-form.component';
import { FormsModule } from '@angular/forms';
import { MapViewComponent } from './map-view/map-view.component';
import { NguiMapModule } from '@ngui/map';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

library.add(faTwitter);
library.add(faFacebook);
library.add(faInstagram);
library.add(faGithub);

@NgModule({
  declarations: [
    AppComponent,
    LeaderboardComponent,
    HomeComponent,
    IssueFormComponent,
    MapViewComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyB5-F7KikHZOoT322H_Dam1X6Gs7MNyWhM'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
