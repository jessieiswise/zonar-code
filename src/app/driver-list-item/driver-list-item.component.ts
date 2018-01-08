import { Component, OnInit, Input } from '@angular/core';
import { Driver } from "../models/driver.model"

@Component({
  selector: 'app-driver-list-item',
  templateUrl: './driver-list-item.component.html',
  styleUrls: ['./driver-list-item.component.css']
})
export class DriverListItemComponent implements OnInit {
  @Input() Driver: Driver;
  constructor() { }

  ngOnInit() {
  }

}
