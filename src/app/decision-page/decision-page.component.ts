import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { DatePipe } from '@angular/common';

import { Router } from '@angular/router';
import { ReportDataService } from '../report-data.service';
import { ConditionalExpr } from '@angular/compiler';

declare var require: any;
var plotOptions = {
  series: {
     stacking: 'normal'
  }
};
  
let Highcharts = require('highcharts');

import HC_networkgraph from 'highcharts/modules/networkgraph';
HC_networkgraph(Highcharts);



 let  More = require('highcharts/highcharts-more');
// More(Highcharts);

const Exporting = require('highcharts/modules/exporting');
Exporting(Highcharts);

const ExportData = require('highcharts/modules/export-data');
ExportData(Highcharts);

const Accessibility = require('highcharts/modules/accessibility');
Accessibility(Highcharts);

interface ExtendedRenderer extends Highcharts.SVGRenderer {
  path(path?: any): Highcharts.SVGElement;
}

interface ExtendedChart extends Highcharts.PlotPackedbubbleOptions {
  layoutAlgorithm: {
    splitSeries: any;
  };
}


@Component({
    selector: 'app-decision-page',
    templateUrl: './decision-page.component.html',
    styleUrls: ['./decision-page.component.css'],
    providers: [DatePipe]
})
export class DecisionPageComponent implements OnInit {


    domain:any;
    totalPhysicalMemory:any;
    diskTotalSize:any;
    logicalProcessor:any;
    operatingSystem:any;
    systemInfo:any;
    curDate:any;
    containerizeCost:any;
    vmCost:any;
    x1I:number=0;
    x2I:any;
    x3I:any;
    y3I:any;
    y2I:any;
    y1I:number =0;
    z1I:number =0;
    z2I:any;
    z3I:any;
    sColor:string="";
    mColor:any;
    cColor:any;
    namePlot:string='';
    countryPlot:string='';
    
 
    public options: any = {
      chart: {
          type: 'bubble',
          plotBorderWidth: 1,
          zoomType: 'xy'
      },
      legend: {
          enabled: false
      },
      title: {
          text: 'Sugar and fat intake per country'
      },
      accessibility: {
          point: {
              valueDescriptionFormat: '{index}. {point.name}, fat: {point.x}g, sugar: {point.y}g, obesity: {point.z}%.'
          }
      },
     xAxis: {
          gridLineWidth: 1,
          title: {
              text: 'Daily fat intake'
          },
          labels: {
              format: '{value} gr'
          },
          plotLines: [{
              color: 'black',
              dashStyle: 'dot',
              width: 2,
              value: 65,
              label: {
                  rotation: 0,
                  y: 15,
                  style: {
                      fontStyle: 'italic'
                  },
                  text: 'Safe fat intake 65g/day'
              },
              zIndex: 3
          }],
          accessibility: {
              rangeDescription: 'Range: 60 to 100 grams.'
          }
      },
  
      yAxis: {
          startOnTick: false,
          endOnTick: false,
          title: {
              text: 'Daily sugar intake'
          },
          labels: {
              format: '{value} gr'
          },
          maxPadding: 0.2,
          plotLines: [{
              color: 'black',
              dashStyle: 'dot',
              width: 2,
              value: 50,
              label: {
                  align: 'right',
                  style: {
                      fontStyle: 'italic'
                  },
                  text: 'Safe sugar intake 50g/day',
                  x: -10
              },
              zIndex: 3
          }],
          accessibility: {
              rangeDescription: 'Range: 0 to 160 grams.'
          }
      },
  
      tooltip: {
          useHTML: true,
          headerFormat: '<table>',
          pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
              '<tr><th>Fat intake:</th><td>{point.x}g</td></tr>' +
              '<tr><th>Sugar intake:</th><td>{point.y}g</td></tr>' +
              '<tr><th>Obesity (adults):</th><td>{point.z}%</td></tr>',
          footerFormat: '</table>',
          followPointer: true
      },
  
      plotOptions: {
          series: {
              dataLabels: {
                  enabled: true,
                  format: '{point.name}'
              }
          }
      },
  
      series: [{
          data: [
              { x: 95, y: 95, z: 13.8, name: 'BE', country: 'Belgium' },
              { x: 86.5, y: 102.9, z: 14.7, name: 'DE', country: 'Germany' },
              { x: 80.8, y: 91.5, z: 15.8, name: 'FI', country: 'Finland' },
              { x: 80.4, y: 102.5, z: 12, name: 'NL', country: 'Netherlands' },
              { x: 80.3, y: 86.1, z: 11.8, name: 'SE', country: 'Sweden' },
              { x: 78.4, y: 70.1, z: 16.6, name: 'ES', country: 'Spain' },
              { x: 74.2, y: 68.5, z: 14.5, name: 'FR', country: 'France' },
              { x: 73.5, y: 83.1, z: 10, name: 'NO', country: 'Norway' },
              { x: 71, y: 93.2, z: 24.7, name: 'UK', country: 'United Kingdom' },
              { x: 69.2, y: 57.6, z: 10.4, name: 'IT', country: 'Italy' },
              { x: 68.6, y: 20, z: 16, name: 'RU', country: 'Russia' },
              { x: 65.5, y: 126.4, z: 35.3, name: 'US', country: 'United States' },
              { x: 65.4, y: 50.8, z: 28.5, name: 'HU', country: 'Hungary' },
              { x: 63.4, y: 51.8, z: 15.4, name: 'PT', country: 'Portugal' },
              { x: 64, y: 82.9, z: 31.3, name: 'NZ', country: 'New Zealand' }
          ]
      }]
    }
      // Load module after Highcharts is loaded
       
    
    constructor(public http: HttpClient,
        public routes: Router,
        public  datePipe: DatePipe,
        public reportDataService : ReportDataService,
        
       ) { 
        
        }
        onclick(){
            this.routes.navigate(['pricing'])
        }

    ngOnInit(): void {

      Highcharts.chart('container', this.options);
      
        let today = new Date();
              let dd = String(today.getDate()).padStart(2, '0');
              let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
              let yyyy = today.getFullYear();

              this.curDate =  dd+"-" + mm +"-"+  yyyy;
        
       
    
        this.extractData();
        setTimeout(()=>{
          this.graphData()
        }, 2000)
        
        // this.graphData();
        // require('highcharts/modules/exporting')(Highcharts);
console.log(this.x1I,this.y1I,this.z1I,this.sColor,this.namePlot,this.countryPlot)
    }


    extractData() {
        this.reportDataService.getDecisionTreeData().
        subscribe((data: any) => { 
            this.domain = data.Domain;
            this.totalPhysicalMemory = data.TotalPhysicalMemory;
            this.logicalProcessor = data.logicalProcessor;
            this.operatingSystem = data.os;
            this.systemInfo = data.systemInfo;

            this.containerizeCost = (this.logicalProcessor*0.4050)+(this.totalPhysicalMemory*0.00445)*730
            if(this.logicalProcessor == 4)
            { this.vmCost = 0.169*730,
              this.x1I= 0;
              this.y1I =0;
              this.z1I =2;
              this.sColor="green";
              this.namePlot="s";
              this.countryPlot="Simple";
              console.log(this.x1I,this.y1I,this.z1I,this.sColor,this.namePlot,this.countryPlot)

            
            }
            if(this.logicalProcessor == 6){ 
              
              this.vmCost = 0.338*730
              this.x1I= 1;
              this.y1I =1;
              this.z1I =2;
              this.sColor="yellow";
              this.namePlot="M";
              this.countryPlot='Medieum';
              console.log(this.x1I,this.y1I,this.z1I,this.sColor,this.namePlot,this.countryPlot)

            }
            if(this.logicalProcessor == 8 || this.logicalProcessor >= 8){ 
              this.vmCost = 0.677*730,
              this.x1I= 2;
              this.y1I =2;
              this.z1I =2;
              this.sColor="red";
              this.namePlot="C";
              this.countryPlot="Complex"

              console.log(this.x1I,this.y1I,this.z1I,this.sColor,this.namePlot,this.countryPlot)

            }
            


            console.log("domain", this.domain)
            console.log("vmcost, containerize cost", this.vmCost,this.containerizeCost)
            
            
            
            
            console.log("data from azure ", data) })
    }
    graphData(){
      
      const data = Highcharts.chart('element1', {
        chart: {
            type: 'bar'
        },
        title: {
            text: '<strong>Readiness status</strong>'
        },
        // subtitle: {
        //     text: 'sample' 

        // },
        xAxis: {
            categories: [ 'Containerization','App Service', 'Virtual Machines'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 10,
            title: {
                text: 'percentage',
                align: 'high'
            },
            // labels: {
            //     overflow: 'justify'
            // }
        },
        tooltip: {
            valueSuffix: ' percent'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        // legend: {
        //     layout: 'vertical',
        //     align: 'right',
        //     verticalAlign: 'top',
        //     x: -40,
        //     y: 80,
        //     floating: true,
        //     borderWidth: 1,
        //     backgroundColor:
        //          "#ff0000",
        //     shadow: true
        // },
        credits: {
            enabled: false
        },
        
    navigation: {
      buttonOptions: {
          enabled:false
      }
  },
        series: [{
            showInLegend: false,
            name: '',
            type: 'bar',
            data: [631, 727, 3202],
        },
            // {
            //     name: 'Year 2000',
            //     type: 'bar',
            //     data: [814, 841, 3714]
            // }, {
            //     name: 'Year 2010',
            //     type: 'bar',
            //     data: [1044, 944, 4170]
            // }, {
            //     name: 'Year 2018',
            //     type: 'bar',
            //     data: [1276, 1007, 4561]
            // }
        ]
    });

    const barcharts = Highcharts.chart('element2', {
        chart: {
            type: 'bar'
        },
        title: {
            text: '<strong>Migration Effort Comparision</strong>'
        },
        // subtitle: {
        //     text: 'sample' 

        // },
        xAxis: {
            categories: [ 'Cloud Central SmartOps', 'Other Tools','Lift & Shift Method'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Days',
                align: 'high'
            },
            // labels: {
            //     overflow: 'justify'
            // }
        },
        tooltip: {
            valueSuffix: ' Days'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },

        credits: {
            enabled: false
        },
        
    navigation: {
      buttonOptions: {
          enabled:false
      }
  },
        series: [{
            showInLegend: false,
            // name: 'Ready',
            type: 'bar',
            data: [1, 5, 7],
        },

        ]
    });
   
    let info = Highcharts.chart({
      chart: {
        renderTo: 'element3',
        type: 'line'
       
    },

    title: {
      text: 'Cloud Cost Forecasting Graph'
    },
  
    // subtitle: {
    //   text: 'Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>'
    // },
    credits:{
      enabled: false
    },
    
    navigation: {
      buttonOptions: {
          enabled:false
      }
  },
  
    yAxis: {
      title: {
        text: 'Number of Dollars Per Month'
      }
    },
  
    xAxis: {
      categories: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ],
    crosshair: true,
      // accessibility: {
      //   rangeDescription: 'Range: 2022 to 2023'
      // }
    },
  
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
  
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        // pointStart: this.curDate.mm,
      }
    },
  
   
series: [{
name: 'Containerization',
data: [1,1,1,1,1,1,1,1,1,1,1]
}, {
name: 'WebApp',
data: [2,2,2, null,null,null,null]
// }, {
//   name: 'Virtual Machine SKU',
//   data: [11744, 30000, 16005, 19771, 20185, 24377,
//     32147, 30912, 29243, 29213, 25663]
// }, {
//   name: 'Operations & Maintenance',
//   data: [null, null, null, null, null, null, null,
//     null, 11164, 11218, 10077]
// }, {
//   name: 'Other',
//   data: [21908, 5548, 8105, 11248, 8989, 11816, 18274,
//     17300, 13053, 11906, 10073]
// 
}
],
  
    responsive: {
      rules: [{
        condition: {
          maxWidth: 5
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  
  });
  
  // Create the chart
  // Highcharts.chart('container', { /*Highcharts options*/ });
     
  const splitBubble = Highcharts.chart('element5', {
    chart: {
      type: 'packedbubble',
      height: '100%'
    },
    title: {
      text: 'Cloud Platforms'
    },
    credits:{
      enabled:false
    },
    
    navigation: {
      buttonOptions: {
          enabled:false
      }
  },
    tooltip: {
      useHTML: true,
      pointFormat: '<b>{point.name}:</b> {point.value}m CO<sub>2</sub>'
    },
    plotOptions: {
      packedbubble: {
        minSize: '20%',
        maxSize: '100%',
        zMin: 0,
        zMax: 1000,
        layoutAlgorithm: {
          gravitationalConstant: 0.05,
          splitSeries: true,
          seriesInteraction: false,
          dragBetweenSeries: true,
          parentNodeLimit: true
        },
        dataLabels: {
          enabled: true,
          format: '{point.name}',
          filter: {
            property: 'y',
            operator: '>',
            value: 250
          },
          style: {
            color: 'black',
            textOutline: 'none',
            fontWeight: 'normal'
          }
        }
      }
    },
    series: [
      {
      name: 'Azure',
      data: [{
        name: 'Containerize',
        value: 767.1
      }, {
        name: 'WebApp',
        value: 20.7
      },
      {
        name: "vm",
        value: 97.2
      },
      {
        name: "Recoding",
        value: 97.2
      },
      ]
    }, 
    {
      name: 'AWS',
      data: [{
        name: "Containerize",
        value: 6.5
      },
      {
        name: "Recoding",
        value: 97.2
      },
      {
        name: "WebApp",
        value: 6.5
      },
      {
        name: "VM",
        value: 7.4
      },
      ]
    },
    {
      name: 'GCP',
      data: [{
        name: "Containerize",
        value: 7.2
      },
      {
        name: "Recoding",
        value: 97.2
      },
      {
        name: "VM",
        value: 8.1
      },
      {
        name: "WebApp",
        value: 17.8
      }]
    },
     {
      name: 'VmWare',
      data: [{
        name: "Containers",
        value: 7.6
      },
      {
        name: "Recoding",
        value: 97.2
      },
      {
        name: "WebApp",
        value: 8.4
      },
      {
        name: "VM",
        value: 8.3
      },
      ]
    }, 
    
    {
      name: 'Ali Baba',
      data: [{
        name: "Containerize",
        value: 8.2
      },
      {
        name: "VM",
        value: 9.2
      },
      {
        name: "WebApp",
        value: 13.1
      },
      {
        name: "Recoding",
        value: 97.2
      },
      ]
    }, {
      name: 'SalesForce',
      data: [{
        name: "Containers",
        value: 409.4
      },
      {
        name: "WebApp",
        value: 34.1
      },
      {
        name: "Recoding",
        value: 97.2
      },
      {
        name: "VM",
        value: 7.1
      }]
    }, 
   
    ]
  });
}
}

     
      
    
    
