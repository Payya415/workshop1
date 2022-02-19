import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

import {FormGroup,FormControl,Validators} from '@angular/forms'
@Component({
  selector: 'app-coffeeshop',
  templateUrl: './coffeeshop.component.html',
  styleUrls: ['./coffeeshop.component.css']
})
export class CoffeeshopComponent implements OnInit {
  datePlaceOrder: String = '';

  UserProfileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    drink: new FormControl('', Validators.required),
    tempPreference: new FormControl('', Validators.required),
    sendText: new FormControl(false),
  });
  resultName: String = '';
  resultEmail: String = '';
  resultPhone: String = '';
  resultDrink: String = '';
  resultTempPreference: String = '';
  resultSendText: Boolean = false;
  constructor() { }

  ngOnInit(): void {

  }
  onSubmit(): void {
    // console.log(this.userProfileForm.value);

    Swal.fire({
      title: 'Are you sure to confirm item?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Confirmed', 'Your Order is successfully', 'success').then(
          () => {
            this.datePlaceOrder = new Date().toLocaleString();
            this.resultName = this.UserProfileForm.value.name;
            this.resultEmail = this.UserProfileForm.value.email;
            this.resultPhone = this.UserProfileForm.value.phone;
            this.resultDrink = this.UserProfileForm.value.drink;
            this.resultTempPreference =
              this.UserProfileForm.value.tempPreference;
            this.resultSendText = this.UserProfileForm.value.sendText;
          }
        );
      }
    });
  }
}
