import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sit',
  templateUrl: './sit.page.html',
  styleUrls: ['./sit.page.scss'],
})
export class SitPage implements OnInit {

  constructor(private detail : NavController) {}


  gotodetail(){
    this.detail.navigateForward('/main');
   }


  ngOnInit() {
  }

}