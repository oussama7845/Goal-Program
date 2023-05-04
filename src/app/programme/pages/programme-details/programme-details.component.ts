import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { programme } from '../../models/programme';
import { programmeService } from '../../services/programme.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-programme-details',
  templateUrl: './programme-details.component.html',
  styleUrls: ['./programme-details.component.scss'],
})
export class ProgrammeDetailsComponent {
  programmeId: number;
  programme$!: Observable<programme>;

  //ActivatedRoute permet de récupérer les paramètres de l'URL
  constructor(
    private route: ActivatedRoute,
    private programmeService: programmeService,
    private location: Location
  ) {
    this.programmeId = +this.route.snapshot.paramMap.get('id')!;
  }
  ngOnInit(): void {
    if (this.programmeId) {
      this.programme$ = this.programmeService.getById(this.programmeId);
    }
  }

  goBack() {
    this.location.back();
  }

  showReceivedValue(value: boolean) {
    console.log(value);
  }
}
