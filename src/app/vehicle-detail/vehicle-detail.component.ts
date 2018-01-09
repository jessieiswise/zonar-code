import { Component, OnChanges, Input } from '@angular/core';
import { DriverDetailsService } from "../driver-details.service"

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnChanges {
  @Input() userid
  api = new DriverDetailsService
  userobj: Object
  constructor() { 
    this.userobj = this.api.getVehicleDetails(this.userid)
    console.log(this.userobj)
  }

  ngOnChanges() {
    this.userobj = this.api.getVehicleDetails(this.userid)
  }

}
