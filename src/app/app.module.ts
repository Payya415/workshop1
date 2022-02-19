import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DirectivetestComponent } from './directivetest/directivetest.component';
import { AppRoutingModule } from './app-routing.module';
import { FriendComponent } from './friend/friend.component';
import { CoffeeshopComponent } from './coffeeshop/coffeeshop.component';
@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    DirectivetestComponent,
    FriendComponent,
    CoffeeshopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
