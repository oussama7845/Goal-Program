import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { objectifService } from 'src/app/objectif/services/objectif.service';
import { objectif } from 'src/app/objectif/models/objectif';
import { programme } from '../../models/programme';
import { programmeService } from '../../services/programme.service';

export interface ProgrammeFormData {
  isCreateForm: boolean;
  programme: programme;
}

@Component({
  selector: 'app-programme-form',
  templateUrl: './programme-form.component.html',
  styleUrls: ['./programme-form.component.scss'],
})
export class ProgrammeFormComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  objectifs$!: Observable<objectif[]>;
  programmes$! : Observable<programme[]>;
  programmeForm! : FormGroup;

  constructor(
    public readonly dialogRef: MatDialogRef<ProgrammeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public readonly data: ProgrammeFormData,
    private readonly fb: FormBuilder,
    private readonly programmeService: programmeService,
    private readonly snackBar: MatSnackBar,
    private readonly objectifService: objectifService
  ) {}

  ngOnInit(): void {
    this.objectifs$ = this.objectifService.get();
    this.programmes$ = this.programmeService.get();

    this.programmeForm = this.createProgrammeForm();
    if (!this.data.isCreateForm) {
      this.setProgrammeForm(this.data.programme);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private createProgrammeForm(): FormGroup {
    return this.fb.group({
      id: [0, Validators.required],
      nom: ['', Validators.required],
      duree: ['', Validators.required],
      nombre_repas_jour: ['', Validators.required],
      calories_jour: ['', Validators.required],
      aliments_recommandes: ['', Validators.required],
      aliments_a_eviter: [[]],
      objectifid: [null, Validators.required],
    });
  }

  private setProgrammeForm(programme: programme): void {
    this.programmeForm.setValue({
      id: programme.id,
      nom: programme.nom,
      duree: programme.duree,
      nombre_repas_jour: programme.nombre_repas_jour,
      calories_jour: programme.calories_jour,
      aliments_recommandes: programme.aliments_recommandes,
      aliments_a_eviter: programme.aliments_a_eviter,
      objectifid: programme.objectifid,
    });
  }

  get title(): string {
    return this.data.isCreateForm
      ? 'Formulaire de création'
      : 'Formulaire de modification';
  }

  get submitBtnName(): string {
    return this.data.isCreateForm ? 'Ajouter' : 'Modifier';
  }
  onSubmit() {
    if (!this.programmeForm || this.programmeForm.invalid) {
      return;
    }
  
    const programme: programme = this.programmeForm.value;
  
    if (this.data.isCreateForm) {
      programme.id = Date.now() + Math.random();
      this.programmeService
        .create(programme)
        .pipe(takeUntil(this.destroy$))
        .subscribe((result) => {
          this.snackBar.open(result, '', {
            duration: 2000,
            panelClass: ['bg-success'],
          });
    
          this.dialogRef.close(true);
        });
    } else {
      this.programmeService
        .update(programme)
        .pipe(takeUntil(this.destroy$))
        .subscribe((result) => {
          this.snackBar.open(result, '', {
            duration: 2000,
            panelClass: ['bg-success'],
          });
  
          this.dialogRef.close(true);
        });
    }
  }
  
  }

