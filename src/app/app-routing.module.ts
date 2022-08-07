import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartureListComponent } from './components/departure-list/departure-list.component';
import { TestdepListComponent } from './components/testdep-list/testdep-list.component';
import { TimetableconstListComponent } from './components/timetableconst-list/timetableconst-list.component';
import { AddTestdepComponent } from './components/add-testdep/add-testdep.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'departure-list', component: DepartureListComponent },
  { path: 'testdep-list', component: TestdepListComponent },
  { path: 'timetableconst-list', component: TimetableconstListComponent },
  { path: 'add-testdep', component: AddTestdepComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}