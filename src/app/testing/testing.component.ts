import { Component, OnInit } from '@angular/core';

// import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_networkgraph from 'highcharts/modules/networkgraph';
HC_networkgraph(Highcharts);


@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})

export class TestingComponent {

  
    networkChart: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'networkgraph',
      height: '500'
    },
    credits:{
      enabled:false
    },
    navigation: {
      buttonOptions: {
          enabled: false
      }
  },

    plotOptions: {
      networkgraph: {
        keys: ['from', 'to'],
        layoutAlgorithm: {
          enableSimulation: true,
          friction: -0.9
        }
      }
    },
    

    series: [
      {
        marker: {
          radius: 10
        },

        type: 'networkgraph',
        dataLabels: {
          enabled: true
        },
        data: [
          ['Miracle Mile Medical Center', 'Samer Alaiti M.D.'],
          ['Miracle Mile Medical Center', 'Platinum Toxicology'],
          ['Vantage Toxicology Management', 'Platinum Toxicology'],
          ['West Oaks Orthopaedic', 'Southern California Orthopedic Institute'],
          ['Chaparral Medical Group Inc', 'Internal Medicine Medical Group'],
          ['Vantage Toxicology Management', 'Internal Medicine Medical Group'],
          ['Chaparral Medical Group Inc', 'West Oaks Orthopaedic'],
          ['Miracle Mile Medical Center', 'Platinum Toxicology'],
          ['Vantage Toxicology Management', 'Andrew D Rah MD'],
          ['Vantage Toxicology Management', 'Norman N Nakata MD'],
          ['Vantage Toxicology Management', 'Joanne Halbrecht M.d'],
          ['Vantage Toxicology Management', 'Ronald J Gowey MD'],
          ['Vantage Toxicology Management', 'Mohammad Sirajullah MD'],
          ['West Oaks Orthopaedic', 'Chaparral Medical Group Inc'],
          [
            'West Oaks Orthopaedic',
            'Hospitalists Corporation of Inland Empire'
          ],
          ['West Oaks Orthopaedic', 'Robert L Horner M.D.'],
          ['West Oaks Orthopaedic', 'Mark H Hyman MD Inc'],
          ['Chaparral Medical Group Inc', 'Precision Occ MED Grp Inc.'],
          ['Precision Occ MED Grp Inc.', 'Gary Phillip Jacobs MD Inc'],
          ['Precision Occ MED Grp Inc.', 'Wellness Wave LLC'],
          ['Precision Occ MED Grp Inc.', 'Precision Occ MED Grp Inc'],
          [
            'Precision Occ MED Grp Inc.',
            'Precision Occupational Medical Group, Inc.'
          ],
          ['Precision Occ MED Grp Inc.', 'Samer Alaiti MD Inc'],
          ['Precision Occ MED Grp Inc.', 'Lotus Laboratories'],
          ['Precision Occ MED Grp Inc.', 'Ontario Medical Center L'],
          ['Precision Occ MED Grp Inc.', 'Leo Newman'],
          ['Precision Occ MED Grp Inc.', 'Ca Diagnostic Specialists Inc'],
          ['Precision Occ MED Grp Inc.', 'Physiolink'],
          ['Precision Occ MED Grp Inc.', 'Matrix Rehabilitation Inc'],
          ['Precision Occ MED Grp Inc.', 'Kaiser Foundation Hospitals']
        ]
      }
    ]
  };
    
  }
  


