import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';

const routes: Routes = [
  {path:"movies", component: MoviesPageComponent},
  {path: "details", component: DetailsPageComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
