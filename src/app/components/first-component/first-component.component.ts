import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = 'Deyvison'
  age: number = 30;
  job = 'Programador';

  hobbies = ['Correr', 'Jogar', 'Estudar']

  car = {
    name: 'Focus'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
