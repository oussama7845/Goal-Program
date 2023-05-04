import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { programmeComponent } from './programme.component';
import { ProgrammeDetailsComponent } from './pages/programme-details/programme-details.component';

const routes: Routes = [
  {
    path: '',
    component: programmeComponent,
  },
  {
    path: ':id',
    component: ProgrammeDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class programmeRoutingModule {}
