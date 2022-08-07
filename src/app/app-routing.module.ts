import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartureListComponent } from './components/departure-list/departure-list.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'departure-list' },
  { path: 'departure-list', component: DepartureListComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}