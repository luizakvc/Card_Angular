import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  banner: string = 'https://images.unsplash.com/photo-1510751007277-36932aac9ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=437&q=80'
  
  @Input()
  titulo: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, obcaecati!'
  
  @Input()
  username: string = 'Mark Ruffus'
  
  @Input()
  userFoto: string = 'https://images.unsplash.com/photo-1522280553110-ba5f9d6dfdeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=885&q=80'

  @Input()
  corBtn: string = 'black'
  
  constructor() { }

  ngOnInit(): void {
  }

}
