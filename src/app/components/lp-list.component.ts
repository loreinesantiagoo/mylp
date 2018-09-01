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

  constructor() { }

  ngOnInit() { }

}
