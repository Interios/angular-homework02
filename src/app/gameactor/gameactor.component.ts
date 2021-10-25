import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-gameactor',
  templateUrl: './gameactor.component.html',
  styleUrls: ['./gameactor.component.css']
})
export class GameactorComponent implements OnInit {
  @Input() actor:any;

  constructor() { }

  ngOnInit(): void {
  }

}
