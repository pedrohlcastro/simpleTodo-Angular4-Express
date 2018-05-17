import { Component, OnInit, Injectable } from '@angular/core';
import { TodoService } from '../shared/todo.service'
@Component({
  selector: 'todo',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.scss'],
})
export class TodoComponent implements OnInit {
  
  todoItens = [];

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todoService.getData()
      .subscribe(res => this.todoItens = res);
  }
  
  getAllData(){
    this.todoService.getData()
      .subscribe(res => this.todoItens = res);
  }

  deleteItem(id){
    const item = this.todoItens[id];
    this.todoService.deleteItem(item._id)
      .subscribe(res => this.getAllData());
  }

  createItem(newItem){
    this.todoService.createItem(newItem.toString())
      .subscribe(res => this.getAllData());
  }
}
