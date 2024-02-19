import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './Mycomponents/todos/todos.component';
import { ItemTodoComponent } from './Mycomponents/item-todo/item-todo.component';
import { AddToodsComponent } from './Mycomponents/add-toods/add-toods.component';
import { FormsModule } from '@angular/forms';
import { AboutComponentsComponent } from './Mycomponents/about-components/about-components.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ItemTodoComponent,
    AddToodsComponent,
    AboutComponentsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
