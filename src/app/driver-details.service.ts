import { Injectable } from '@angular/core';
import { Driver } from "./models/driver.model"

@Injectable()
export class DriverDetailsService {

  constructor() { }
  // if I had more time, I would hook this up as an observable
  public getDriverList(){
    let drivers = []
    while (drivers.length < 8) {
      console.log('test')
      let driver = new Driver()
      driver.exsid = 1000 + drivers.length,
      driver.event_type_name = "DUTY_STATUS",
      driver.tagid = 4040 + drivers.length,
      driver.lname = "John",
      driver.fname = "Smith",
      driver.event_code_name = "DRIVING",
      driver.duty_status = "DRIVING",
      driver.driver_id = 2761 + drivers.length,
      driver.timezone ="PST8PDT",
      driver.violation_state ="V"
      drivers.push(driver)
    }
    return drivers
  }
  public getDriverDetails(userid) {
    return{
      summary: {
        start_epoch: 1515052800,
        end_epoch: 1515139199,
        distance_driven: 100,
        distance_pc: 10,
        ruleset_id: 2,
        violation_state: 'V',
        duty_status_totals: [
          {
            seconds: 40168,
            event_code: 'DRIVING'
          },
          {
            seconds: 0,
            event_code: 'OFF'
          },
          {
            seconds: 0,
            event_code: 'SLEEPER BERTH'
          },
          {
            seconds: 0,
            event_code: 'ON'
          }
        ],
        clocks: [
          {
            violation_code: '8D',
            clock: 5,
            duration: 0,
            allotted: 252000,
            active: true,
            violation_state: 'V'
          },
          {
            violation_code: 'DD',
            clock: 1,
            duration: 0,
            allotted: 39600,
            active: true,
            violation_state: 'V'
          },
          {
            violation_code: 'DOD',
            clock: 2,
            duration: 0,
            allotted: 50400,
            active: true,
            violation_state: 'V'
          },
          {
            violation_code: 'DR',
            clock: 3,
            duration: 0,
            allotted: 28800,
            active: true,
            violation_state: 'V'
          },
          {
            active: false,
            duration: 0,
            clock: 4,
            allotted: 0
          },
          {
            active: false,
            duration: 86400,
            clock: 10,
            allotted: 0
          },
          {
            active: false,
            duration: 0,
            clock: 100,
            allotted: 0
          }
        ]
      },
      details: {
        driver_name: 'John Smith',
        driver_id: 2761,
        exemption_applied: false,
        ruleset_name: 'Property 70',
        ruleset_id: 2,
        current_team_driver: 'Jane Smith',
        team_drivers_details: [
          'Jane Smith',
          'Jo Smith'
        ],
        timezone: 'PST8PDT'
      }
    }
  }
  public getVehicleDetails(userid) {
    return {
      assets: [
        {
          cmv_power_unit: '30498SDG098',
          vin: '1M2B209C11M028024',
          asset_id: 53
        }
      ],
      carrier: {
        carrier_name: '39DS09BSIE',
        dot_number: '123492'
      }
    }
}
