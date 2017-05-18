import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListserviceService } from '../listservice.service';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {
  entry: Object = {};

  constructor(
    private route: ActivatedRoute,
    private list: ListserviceService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getJournalDetails(params['id']);
    });
  }

  getJournalDetails(id) {
    this.list.get(id)
    .subscribe((entry) => {
      this.entry = entry;
    });
  }

}
