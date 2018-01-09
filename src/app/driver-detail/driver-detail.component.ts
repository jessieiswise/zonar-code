import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DriverDetailsService } from "../driver-details.service"

@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.component.html',
  styleUrls: ['./driver-detail.component.css']
})
export class DriverDetailComponent implements OnInit, OnChanges {
  @Input() userid
  api = new DriverDetailsService
  userobj: Object
  constructor() {
    this.userobj = this.api.getDriverDetails(this.userid)
   }
  convertEpochToTime(e) {
    let value = new Date(0)
    value.setUTCSeconds(e)
    return  value.toLocaleString()
  }
  convertSecondsToTimeElapsed(e) {
    let value = e/3600
    return value.toFixed(2)
  }
  ngOnInit() {
    this.userobj = this.api.getDriverDetails(this.userid)
  }
  ngOnChanges() {
    this.userobj = this.api.getDriverDetails(this.userid)
  }
}
