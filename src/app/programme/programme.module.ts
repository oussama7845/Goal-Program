import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { programmeRoutingModule } from './programme-routing.module';
import { programmeComponent } from './programme.component';
import { programmeListComponent } from './pages/programme-list/programme-list.component';
import { programmeService } from './services/programme.service';
import { SharedModule } from '../shared/shared.module';
import { ProgrammeFormComponent } from './components/programme-form/programme-form.component';
import { ProgrammeDetailsComponent } from './pages/programme-details/programme-details.component';
import { objectifService } from '../objectif/services/objectif.service';

@NgModule({
  declarations: [
    programmeComponent,
    programmeListComponent,
    ProgrammeFormComponent,
    ProgrammeDetailsComponent,
  ],
  imports: [CommonModule, programmeRoutingModule, SharedModule, ReactiveFormsModule],
  providers: [programmeService, objectifService],
})
export class programmeModule {}
