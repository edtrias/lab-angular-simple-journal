import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { ListserviceService } from './listservice.service';
import { SingleEntryComponent } from './single-entry/single-entry.component';
import { EntryFormComponent } from './entry-form/entry-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'journal-entries', pathMatch: 'full' },
  { path: 'journal-entries',  component: EntryListComponent },
  { path: 'journal-entries/:id', component: SingleEntryComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleEntryComponent,
    EntryFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ListserviceService],
  bootstrap: [AppComponent]
})

export class AppModule { }
