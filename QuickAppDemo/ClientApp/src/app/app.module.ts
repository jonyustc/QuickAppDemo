import { ToDoService } from './services/to-do.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {ModalModule} from 'ngx-bootstrap/modal';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {MatCardModule, MatIconModule, MatInputModule} from '@angular/material';
import {ColorPickerModule} from 'ngx-color-picker';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { FetchDataComponent } from './components/fetch-data/fetch-data.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { HttpModule } from '@angular/http';
import { AppChildComponent } from './app-child/app-child.component';
import { CodeSampleComponent } from './components/code-sample/code-sample.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorMeComponent } from './components/color-me/color-me.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CardsListComponent } from './Shared/cards-list/cards-list.component';
import { ListComponent } from './Shared/cards-list/list/list.component';
import { CardComponent } from './Shared/cards-list/card/card.component';
import { TodoItemCardComponent } from './Shared/todo-item-card/todo-item-card.component';
import { TodoItemListComponent } from './Shared/todo-item-list/todo-item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ToDoComponent,
    AppChildComponent,
    CodeSampleComponent,
    ColorMeComponent,
    TodoListComponent,
    CardsListComponent,
    ListComponent,
    CardComponent,
    TodoItemCardComponent,
    TodoItemListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    NgxDatatableModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    ColorPickerModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'todo-list', component: TodoListComponent },
    ]),
    BrowserAnimationsModule
  ],
  providers: [ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
