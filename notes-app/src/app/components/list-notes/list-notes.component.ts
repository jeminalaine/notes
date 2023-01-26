import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { Router } from '@angular/router';
import { Note } from 'src/app/models/note';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit {

  public notes: any = [];

  constructor(private _notesService: NotesService,
              private _router: Router) { }

  ngOnInit(): void {
    this._notesService.getNotes().subscribe(notes => {
      this.notes = notes;
    })
  }

  delNote(_id: string){
    this._notesService.delNote(_id)
    .subscribe((res)=>{
      this._notesService.getNotes()
      this._notesService.selectedNote = new Note()
    })
  }

}
