import { Component, OnInit, Input } from '@angular/core';
import { LP } from '../model';

@Component({
  selector: 'app-lp-list',
  templateUrl: './lp-list.component.html',
  styleUrls: ['./lp-list.component.css']
})
export class LpListComponent implements OnInit {

  @Input()
  lpList: LP[] = []

  canShare = !!navigator['share'];

  constructor() { }

  ngOnInit() { 
    console.log('canShare: ', this.canShare);
  }

  share(index: number) {
    console.log('share = ', this.lpList[index]);
  }

}
