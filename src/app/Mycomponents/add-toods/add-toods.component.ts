import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-toods',
  templateUrl: './add-toods.component.html',
  styleUrls: ['./add-toods.component.css']
})
export class AddToodsComponent {

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter;
  title:string = "";
  desc:string  = "";
  
  onSubmit(){

    const todo = {
      sno : 84835,
      title : this.title,
      desc : this.desc,
      active : true
    }
    this.todoAdd.emit(todo);
  }

  
  
}
