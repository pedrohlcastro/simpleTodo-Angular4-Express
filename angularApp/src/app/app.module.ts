import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo-component/todo-component.component';
import { TodoService } from './shared/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ TodoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
