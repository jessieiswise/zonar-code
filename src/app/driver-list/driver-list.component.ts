import { Component, OnInit, Input } from '@angular/core';
import { DriverListItemComponent } from "../driver-list-item/driver-list-item.component"
import { Driver } from "../models/driver.model"
import _ from "lodash";

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {
  drivers = []
  constructor() {
    while (this.drivers.length < 8) {
      console.log('test')
      let driver = new Driver()
      driver.exsid = 1000 + this.drivers.length,
      driver.event_type_name = "DUTY_STATUS",
      driver.tagid = 4040 + this.drivers.length,
      driver.lname = "John",
      driver.fname = "Smith",
      driver.event_code_name = "DRIVING",
      driver.duty_status = "DRIVING",
      driver.driver_id = 2761 + this.drivers.length,
      driver.timezone ="PST8PDT",
      driver.violation_state ="V"
      this.drivers.push(driver)
    }
   }

  ngOnInit() {

  }

}
