/*import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
*/

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigComponent }      from './config/config.component';
import { StatsComponent }   from './stats/stats.component';
import { VerbsComponent }  from './verbs/verbs.component';
import { VocabularyComponent }  from './vocabulary/vocabulary.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'config', component: ConfigComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'verbs', component: VerbsComponent },
  { path: 'vocabulary', component: VocabularyComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}