import { Component, OnInit, Input, Output } from '@angular/core';


@Component({
  selector: 'app-driver-list-item',
  templateUrl: './driver-list-item.component.html',
  styleUrls: ['./driver-list-item.component.css']
})
export class DriverListItemComponent implements OnInit {
  @Input() fname: string;
  @Input() lname: string;
  @Input() exsid: string;
  @Input() driverid: string;
  constructor() {

   }
  onClick(e) {

  }
  ngOnInit() {

  }

}
