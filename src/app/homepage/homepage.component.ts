import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  images = ['./assets/img.jpg','./assets/img2.jpg','./assets/img3.jpg','./assets/img5.jpg' ];
  constructor() { }

  ngOnInit() {
  }

}
