import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DriverListItemComponent } from "../driver-list-item/driver-list-item.component"
import { Driver } from "../models/driver.model"
import { DriverDetailsService } from "../driver-details.service"
import _ from "lodash";

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {
  @Output() 
  selected: EventEmitter<number> = new EventEmitter<number>();
  drivers = []
  ngOnInit() {
    
  }
  constructor () {
    let api = new DriverDetailsService
    this.drivers = api.getDriverList()
  }
  driverClick(e) {
    this.selected.emit(e)
  }
}
