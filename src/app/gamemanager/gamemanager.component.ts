import { Component, OnInit } from '@angular/core';

interface ChooseType {
  name: string,
  values: Object
}
interface ChooseManager {
  choose: ChooseType[],
  player: any,
  bot: any,
  result: string
}

@Component({
  selector: 'app-gamemanager',
  templateUrl: './gamemanager.component.html',
  styleUrls: ['./gamemanager.component.css']
})
export class GamemanagerComponent implements OnInit {

  public manager:ChooseManager = {
    choose: [{
        name: "rock",
        values: [2, 1]
      }, {
        name: 'scissors',
        values: [3, 2]
      }, {
        name: 'paper',
        values: [1, 3]
    }],
    player: {
      name: "Jackson",
      choose: {
        name: null,
        values: null
      },
      count: 0
    },
    bot: {
      name: "Emanuel",
      choose: {
        name: null,
        values: null
      },
      count: 0
    },
    result: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  handleClone = (obj: Object) => {
    return JSON.parse(JSON.stringify(obj))
  }

  handleStart = (value: number) => {
    this.manager.result = '';
    this.manager.bot.choose.name = null;
    this.manager.player.choose.name = null;

    setTimeout(() => {
      this.manager.bot.choose = this.handleClone(this.manager.choose[Math.floor(Math.random() * 3)]);
      this.manager.player.choose = this.handleClone(this.manager.choose[value]);  

      this.handleResult();
    }, 1000);
  }

  handleResult = () => {
    this.manager.result = this.manager.player.choose.values[0] == this.manager.bot.choose.values[1]
      ? "win"
      : this.manager.player.choose.values[1] == this.manager.bot.choose.values[1]
      ? 'draw'
      : 'lose';

    switch(this.manager.result) {
      case 'win':
        this.manager.player.count ++;
        break;
      case 'lose':
        this.manager.bot.count ++;
        break;
    }
  }
}
