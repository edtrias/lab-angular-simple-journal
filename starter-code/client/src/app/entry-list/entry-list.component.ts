import { Component, OnInit } from '@angular/core';
import { ListserviceService } from '../listservice.service';


@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  entries;

  constructor(private list: ListserviceService) { }

  ngOnInit() {
    this.list.getList()
    .subscribe((entries) => {
      this.entries = entries;
    });
  }

}
