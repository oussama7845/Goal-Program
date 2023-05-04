import { Component, Inject, OnDestroy } from '@angular/core';
import { objectif } from '../../models/objectif';
import { Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject, takeUntil } from 'rxjs';
import { objectifService } from '../../services/objectif.service';

export interface objectifFormData {
  isCreateForm: boolean;
  objectif: objectif;
}

@Component({
  selector: 'app-objectif-form',
  templateUrl: './objectif-form.component.html',
  styleUrls: ['./objectif-form.component.scss'],
})
export class objectifFormComponent implements OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  objectifs: string[] = ['seche', 'masse'];

  objectifForm = this.fb.group({
    id: [0, [Validators.required]],
    objectif: ['', [Validators.required]],
  });

  constructor(
    public dialogRef: MatDialogRef<objectifFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: objectifFormData,
    private fb: FormBuilder,
    private objectifService: objectifService,
    private _snackBar: MatSnackBar
  ) {
    if (!data.isCreateForm) {
      this.setobjectifForm(data.objectif);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  setobjectifForm(objectif: objectif) {
    this.objectifForm.setValue({
      id: objectif.id,
      objectif: objectif.objectifName,
    });
  }
  

  get title() {
    if (this.data.isCreateForm) {
      return 'Formulaire de création';
    }
    return 'Formulaire de modification';
  }

  get submitBtnName() {
    if (this.data.isCreateForm) {
      return 'Ajouter';
    }
    return 'Modifier';
  }

  onSubmit() {
    if (this.objectifForm.valid) {
      if (this.data.isCreateForm) {
        this.objectifForm.value.id = Date.now() + Math.random();
        this.objectifService
          .create(this.objectifForm.value as objectif)
          .pipe(takeUntil(this.destroy$))
          .subscribe((result) => {
            this._snackBar.open(result, '', {
              duration: 2000,
              panelClass: ['bg-success'],
            });

            this.dialogRef.close(true);
          });
      } else {
        this.objectifService
          .update(this.objectifForm.value as objectif)
          .pipe(takeUntil(this.destroy$))
          .subscribe((result) => {
            this._snackBar.open(result, '', {
              duration: 2000,
              panelClass: ['bg-success'],
            });

            this.dialogRef.close(true);
          });
      }
    }
  }
}
