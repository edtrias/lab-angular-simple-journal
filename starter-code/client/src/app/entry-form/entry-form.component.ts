import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListserviceService } from '../listservice.service';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {

    newEntry: Object = {};

  constructor(private list: ListserviceService) { }

  ngOnInit() {
  }

  addEntry() {
    this.list.create(this.newEntry).subscribe();
  }

}
