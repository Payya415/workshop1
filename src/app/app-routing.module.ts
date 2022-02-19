import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFormComponent } from './my-form/my-form.component';
import { DirectivetestComponent } from './directivetest/directivetest.component';
import { FriendComponent } from './friend/friend.component';
import { Routes,RouterModule } from '@angular/router';
import { CoffeeshopComponent } from './coffeeshop/coffeeshop.component';
const routes: Routes = [
  {path:'myform',component:MyFormComponent},
  {path:'directive',component:DirectivetestComponent},
  {path:'friend',component:FriendComponent},
  {path:'coffeeshop',component:CoffeeshopComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports :[RouterModule]
})
export class AppRoutingModule { }
