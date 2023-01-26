import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '../models/note';


@Injectable({
  providedIn: 'root'
})
export class NotesService {

  selectedNote:Note;
  notes:Note[];

  private baseUrl: string = "http://localhost:3000/notes";

  constructor(private _httpClient: HttpClient) {
    this.selectedNote = new Note()
   }

  getNotes() {
    return this._httpClient.get(this.baseUrl);
  }

  saveNote(note: Note) {
    return this._httpClient.post(this.baseUrl, note);
  }

  putNote(note: Note) {
    return this._httpClient.put(this.baseUrl+note._id, note);
  }

  delNote(_id: string) {
    return this._httpClient.delete(this.baseUrl+_id);
  }
}
