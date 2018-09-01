import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LP } from '../model';

@Component({
  selector: 'app-lp-entry',
  templateUrl: './lp-entry.component.html',
  styleUrls: ['./lp-entry.component.css']
})
export class LpEntryComponent implements OnInit {

  @ViewChild('lpForm') lpForm: NgForm;

  @Output()
  newLP = new EventEmitter<LP>();

  constructor() { }

  ngOnInit() { }

  insertLP() {
    const lp: LP = this.lpForm.value;
    lp.albumCover = lp.albumCover || 'assets/not_available.jpg';
    this.newLP.next(lp);
    this.lpForm.resetForm();
  }

}
