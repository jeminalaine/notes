import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from 'src/app/models/note';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {

  public note: Note = new Note();

  constructor(private _noteService: NotesService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  saveNote() {
    console.log('printing note', this.note);
    this._noteService.saveNote(this.note).subscribe(note => {
      if (note) {
        this._router.navigateByUrl('/notes');
      }
    })
  }

}
