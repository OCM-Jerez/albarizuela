import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MapComponent } from './pages/map/map.component';
import { TableProblemasComponent } from './pages/table-problemas/table-problemas.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'table', component: TableProblemasComponent },
  { path: 'map', component: MapComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
