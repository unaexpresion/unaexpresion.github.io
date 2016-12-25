import { Component } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import {Todo} from "./todo";

/*@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})*/
@Component({
  providers: [TodoDataService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  newTodo: Todo = new Todo();

  // Ask Angular DI system to inject the dependency
  // associated with the dependency injection token 'TodoDataService'
  // and assign it to a property called 'todoDataService'
  constructor(private todoDataService: TodoDataService){}
  // Service is now available as this.todoDataService

  addTodo(){
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo){
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo){
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos(){ //get accessor must return a value
    return this.todoDataService.getAllTodos();
  }
}
