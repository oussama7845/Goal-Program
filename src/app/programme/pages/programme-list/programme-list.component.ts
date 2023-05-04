import { Component, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { programme } from '../../models/programme';
import { programmeService } from '../../services/programme.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { GenericPopupComponent } from 'src/app/shared/components/generic-popup/generic-popup.component';
import { ProgrammeFormComponent } from '../../components/programme-form/programme-form.component';

@Component({
  selector: 'app-programme-list',
  templateUrl: './programme-list.component.html',
  styleUrls: ['./programme-list.component.scss'],
})
export class programmeListComponent implements OnInit {
  private destroy$: Subject<boolean> = new Subject<boolean>();
  programmes$!: Observable<programme[]>;

  //Ajouter la suite dans programme-list.componenent.ts
  displayedColumns: string[] = [
    'nom',
    'duree',
    'nombre_repas_jour',
    'calories_jour',
    'aliments_recommandes',
    'aliments_a_eviter',
    'update',
    'delete',
  ];

  constructor(
    private programmeService: programmeService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.programmes$ = this.programmeService.get();
  }

  fetchData() {
    this.programmes$ = this.programmeService.get();
  }

  delete(id: number) {
    const ref = this.dialog.open(GenericPopupComponent, {
      data: {
        title: 'Confirmation de suppression',
        message: 'êtes-vous sûr de vouloir supprimer cet étudiant ?',
        typeMessage: 'none',
        yesButtonVisible: true,
        noButtonVisible: true,
        cancelButtonVisible: false,
        defaultButton: 'No',
        yesButtonLabel: 'Oui',
        noButtonLabel: 'Non',
      },
    });

    ref
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        if (result) {
          this.programmeService
            .delete(id)
            .pipe(takeUntil(this.destroy$))
            .subscribe((result) => {
              this._snackBar.open(result, '', {
                duration: 2000,
                panelClass: ['bg-success'],
              });
              this.fetchData();
            });
        }
      });
  }

  openprogrammeForm(programme?: programme) {
    const dialogRef = this.dialog.open(ProgrammeFormComponent, {
      height: '85%',
      width: '60%',
      data: {
        isCreateForm: programme ? false : true,
        programme: programme ? programme : undefined,
      },
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        if (result) {
          this.fetchData();
        }
      });
  }

  showprogrammeDetails(programmeId: number) {
    this.router.navigate(['/programme/' + programmeId]);
  }
}
