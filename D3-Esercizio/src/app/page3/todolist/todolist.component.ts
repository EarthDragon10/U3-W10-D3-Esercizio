import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  txt_italic: string = '';
  btnClicked: boolean = false;

  todos = [
    { id: 1, text: 'testo di prova 1' },
    { id: 2, text: 'testo di prova 2' },
    { id: 3, text: 'testo di prova 3' },
  ];

  constructor() {}

  ngOnInit(): void {}

  changeItalic(): void {
    // this.btnClicked ?
    // this.btnClicked = !this.btnClicked;

    this.txt_italic = this.txt_italic === '' ? 'txt_italic' : '';
  }
}
