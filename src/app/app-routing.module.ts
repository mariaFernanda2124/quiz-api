import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';
import { CharacterEpisodesComponent } from './character-episodes/character-episodes.component';
import { RickAndMortyComponent } from './rick-and-morty/rick-and-morty.component';

const routes: Routes = [
  { path: 'character/:id', component: CharacterEpisodesComponent },
  { path: '', component: RickAndMortyComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }