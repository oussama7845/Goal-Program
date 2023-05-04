import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { objectifRoutingModule } from './objectif-routing.module';
import { objectifComponent } from './objectif.component';
import { ObjectifListComponent } from './pages/objectif-list/objectif-list.component';
import { objectifService } from './services/objectif.service';
import { objectifDetailsComponent } from './pages/objectif-details/objectif-details.component';
import { SharedModule } from '../shared/shared.module';
import { objectifFormComponent } from './components/objectif-form/objectif-form.component';

@NgModule({
  declarations: [
    objectifComponent,
    ObjectifListComponent,
    objectifDetailsComponent,
    objectifFormComponent,
  ],
  imports: [CommonModule, objectifRoutingModule, SharedModule],
  providers: [objectifService],
})
export class objectifModule {}
