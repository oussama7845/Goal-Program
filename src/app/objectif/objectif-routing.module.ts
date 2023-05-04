import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { objectifComponent } from './objectif.component';
import { objectifDetailsComponent } from './pages/objectif-details/objectif-details.component';

const routes: Routes = [
  {
    path: '',
    component: objectifComponent,
  },
  {
    path: ':id',
    component: objectifDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class objectifRoutingModule {}
