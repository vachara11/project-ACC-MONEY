import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {


  constructor(private sit : NavController) {}

  gotosit(){
    this.sit.navigateForward('/contact')
  }




  ngOnInit() {
  }
  public alertButtons = [
    {
      text: 'ตกลง',

      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');

      },
    },
    {
      text: 'ออก',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];



  public alertInputs = [
    {
      placeholder: 'รายละเอียด',
    },

    {
      type: 'number',
      placeholder: 'จำนวนเงิน',
      min: 1,
      max: 100,
    },

  ];





  public alertButtons2 = [
    {
      text: 'ตกลง',

      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');

      },
    },
    {
      text: 'ออก',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];



  public alertInputs2 = [
    {
      placeholder: 'รายละเอียด',
    },

    {
      type: 'number',
      placeholder: 'จำนวนเงิน',
      min: 1,
      max: 100,
    },

  ];




}
