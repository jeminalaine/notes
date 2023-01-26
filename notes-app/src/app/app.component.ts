import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NotesService } from './services/notes.service';
import { Note } from './models/note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _notesService: NotesService){}

  ngOnInit(){
    this.getNotes()
  }

  getNotes(){
    this._notesService.getNotes()
    .subscribe((res)=>{
      this._notesService.notes = res as Note[];
    })
  }

  saveNote(note:Note){
    this._notesService.saveNote(note)
    .subscribe((res)=>{
      this.getNotes()
      this._notesService.selectedNote = new Note()
    })
  }

  putNote(note:Note){
    this._notesService.putNote(note)
    .subscribe((res)=>{
      this.getNotes()
      this._notesService.selectedNote = new Note()
    })
  }

  delNote(_id:string){
    this._notesService.delNote(_id)
    .subscribe((res)=>{
      this.getNotes()
      this._notesService.selectedNote = new Note()
    })
  }

}
