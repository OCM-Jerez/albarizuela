import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasasOcupadasComponent } from './pages/casas-ocupadas/casas-ocupadas.component';
import { ConteneroresBizcocherosComponent } from './pages/contenerores-bizcocheros/contenerores-bizcocheros.component';
import { HomeComponent } from './pages/home/home.component';
import { MapComponent } from './pages/map/map.component';
import { TableProblemasComponent } from './pages/table-problemas/table-problemas.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'table', component: TableProblemasComponent },
	{ path: 'map', component: MapComponent },
	{ path: 'contenedores-bizcocheros', component: ConteneroresBizcocherosComponent },
	{ path: 'casas-ocupadas', component: CasasOcupadasComponent },

	{ path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
