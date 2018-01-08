import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { DriverDetailComponent } from './driver-detail/driver-detail.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { DriverListItemComponent } from './driver-list-item/driver-list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    DriverListComponent,
    DriverDetailComponent,
    VehicleDetailComponent,
    DriverListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
