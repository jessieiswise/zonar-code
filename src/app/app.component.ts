import { Component } from '@angular/core';
import { DriverListComponent } from "./driver-list/driver-list.component"
import { DriverDetailComponent } from "./driver-detail/driver-detail.component"
import { VehicleDetailComponent } from "./vehicle-detail/vehicle-detail.component"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selected: number
  onChange(e) {
    this.selected = e
  }
}
