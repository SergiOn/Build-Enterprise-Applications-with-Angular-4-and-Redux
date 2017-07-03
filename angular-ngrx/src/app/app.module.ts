import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { todoReducer, updateReducer } from './reducers';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore({
      todo: todoReducer,
      update: updateReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
