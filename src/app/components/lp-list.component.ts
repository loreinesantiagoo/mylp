import { Component, OnInit, Input } from '@angular/core';


import { LP } from '../model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-lp-list',
  templateUrl: './lp-list.component.html',
  styleUrls: ['./lp-list.component.css']
})
export class LpListComponent implements OnInit {

  @Input()
  lpList: LP[] = []

  canShare = false;

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() { 
    this.canShare = !!navigator['share'];
  }

  share(index: number) {
    navigator['share']({
      title: this.lpList[index].albumName,
      text: this.lpList[index].artistName,
      url: this.lpList[index].albumCover
    })
    .then(() => { this.snackBar.open('Shared'); })
  }

}
