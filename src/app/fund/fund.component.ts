import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
})
export class FundComponent implements OnInit {
  public isExpandex = false;
  public visible = true;
  dataSource: Object;
  constructor() {
      this.dataSource = {
          'chart': {
              'caption': 'Countries With Most Oil Reserves [2017-18]',
              'subCaption': 'In MMbbl = One Million barrels',
              'xAxisName': 'Country',
              'yAxisName': 'Reserves (MMbbl)',
              'numberSuffix': 'K',
              'theme': 'fusion',
          },
          // Chart Data
          'data': [{
              'label': 'Venezuela',
              'value': '290'
          }, {
              'label': 'Saudi',
              'value': '260'
          }, {
              'label': 'Canada',
              'value': '180'
          }, {
              'label': 'Iran',
              'value': '140'
          }, {
              'label': 'Russia',
              'value': '115'
          }, {
              'label': 'UAE',
              'value': '100'
          }, {
              'label': 'US',
              'value': '30'
          }, {
              'label': 'China',
              'value': '30'
          }]
      }; // end of this.dataSource
  } // end of constructor

  ngOnInit() {
  }

  public togglePanel(event) {
  }

}
