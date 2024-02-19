import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-item-todo',
  templateUrl: './item-todo.component.html',
  styleUrls: ['./item-todo.component.css']
})
export class ItemTodoComponent {
  @Input() todo:Todo = new Todo;
  @Input() i:number = 0;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter;
  @Output() todocheckboc: EventEmitter<Todo> = new EventEmitter;
onClick(todo:Todo) {

  this.todoDelete.emit(todo)
  console.log("Onclick Called")
}
onCheckbokClik(todo: Todo){
  this.todocheckboc.emit(todo);
}

  
}
