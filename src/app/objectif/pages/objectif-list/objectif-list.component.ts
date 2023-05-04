import { Component, OnDestroy, OnInit } from '@angular/core';
import { objectif } from '../../models/objectif';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GenericPopupComponent } from 'src/app/shared/components/generic-popup/generic-popup.component';
import { objectifService } from '../../services/objectif.service';
import { Router } from '@angular/router';
import { objectifFormComponent } from '../../components/objectif-form/objectif-form.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-objectif-list',
  templateUrl: './objectif-list.component.html',
  styleUrls: ['./objectif-list.component.scss'],
})
export class ObjectifListComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();
  objectifs$!: Observable<objectif[]>;
  dataSource!: MatTableDataSource<objectif>;

  displayedColumns: string[] = ['id', 'objectif', 'delete'];
  selectedObjectif: objectif | undefined;

  constructor(
    private objectifService: objectifService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchData();
    this.objectifs$.subscribe((objectifs: objectif[]) => {
      // create new MatTableDataSource with objectifs as data source
      this.dataSource = new MatTableDataSource<objectif>(objectifs);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }



  fetchData() {
    this.objectifs$ = this.objectifService.get();
  }

  openObjectifForm(objectif?: objectif) {
    const dialogRef = this.dialog.open(objectifFormComponent, {
      height: '85%',
      width: '60%',
      data: {
        isCreateForm: objectif ? false : true,
        objectif: objectif ? objectif : undefined,
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

  delete(id: number) {
    const ref = this.dialog.open(GenericPopupComponent, {
      data: {
        title: 'Confirmation de suppression',
        message: 'Êtes-vous sûr de vouloir supprimer cette catégorie ?',
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
          this.objectifService
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

  showObjectifDetails(objectifId: number) {
    console.log('Afficher les détails de la objectif', objectifId);
    // this.router.navigate(['/objectifs/' + objectifId]);
  }

  showSelectedObjectifDetails(objectif: objectif) {
    this.selectedObjectif = objectif;
  }
}

/*
  openprogrammeForm(objectif?: objectif) {
    console.log('afficher la pop up de mise à jour');
    const dialogRef = this.dialog.open(objectifFormComponent, {
      height: '85%',
      width: '60%',
      data: {
        isCreateForm: objectif ? false : true,
        objectif: objectif ? objectif : undefined,
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

  showprogrammeDetails(objectifId: number) {
    console.log('afficher les détails de la objectif', objectifId);
    // this.router.navigate(['/objectifs/' + objectifId]);
  }
  */