import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { VerbsComponent } from './verbs/verbs.component';
import { ConfigComponent } from './config/config.component';
import { StatsComponent } from './stats/stats.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    VocabularyComponent,
    VerbsComponent,
    ConfigComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
