import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'programmes',
    pathMatch: 'full',
  },
  {
    path: 'programmes',
    loadChildren: () =>
      import('./programme/programme.module').then((m) => m.programmeModule),
  },
  // {
  //   path: '**', // les ** signifient tout le reste des urls
  //   component: NotFoundComponent,
  // },
  {
    path: 'objectif',
    loadChildren: () =>
      import('./objectif/objectif.module').then((m) => m.objectifModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
