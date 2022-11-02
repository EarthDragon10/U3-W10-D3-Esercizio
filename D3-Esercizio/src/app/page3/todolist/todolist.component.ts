import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  txt_italic: string = '';
  btnClicked: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  changeItalic(): void {
    // this.btnClicked ?
    // this.btnClicked = !this.btnClicked;

    this.txt_italic = this.txt_italic === '' ? 'txt_italic' : '';
  }
}
