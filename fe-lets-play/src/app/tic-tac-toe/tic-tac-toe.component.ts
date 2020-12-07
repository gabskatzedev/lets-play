import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit, OnChanges {

  public values: string[] = ["", "", "", "", "", "", "", "", ""];
  private currentValue: string = "X";

  constructor() { }

  ngOnInit(): void {
  }

  switchValue(index: number){
    
    if(this.values[index] !== ""){
      return;
    }

    this.values[index] = this.currentValue;
    
    if(this.currentValue === "X"){
      this.currentValue = "O";
    } else {
      this.currentValue = "X";
    }
  }

  start(){
    this.values =  ["", "", "", "", "", "", "", "", ""];
    this.currentValue = "X";
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChanges");
    //const newChange = SimpleChange = changes.
  }
  
}
