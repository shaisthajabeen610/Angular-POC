import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
let  Highcharts = require('highcharts');  
// import 'Highcharts/highcharts-more';
import { ReportDataService } from '../report-data.service';

// import * as Highcharts from 'highcharts';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
// More(Highcharts);
noData(Highcharts);
//import * as ChartModuleMore from 'highcharts/highcharts-more';
// import HCSoldGauge from 'highcharts/modules/solid-gauge';

// require('highcharts/highcharts-more.js')(Highcharts);


// Load module after Highcharts is loaded

// require('highcharts/modules/exporting')(Highcharts);
// require('highcharts-solid-gauge');
// let HighCharts = require('highcharts-solid-gauge');

//ChartModuleMore(Highcharts);
// HCSoldGauge(Highcharts);

@Component({
  selector: 'app-server-info',
  templateUrl: './server-info.component.html',
  styleUrls: ['./server-info.component.css']
})
export class ServerInfoComponent implements OnInit {
  hide1:boolean=true;
  hide2:boolean=true;
  hide3:boolean=true;
  hide4:boolean=true;
  expand1:boolean=true;
  expand2:boolean=true;
  expand3:boolean=true;
  systype:any;
  pId:any;
  regorg:any;
  regown:any;
  serverName:any;
  syslocale:any;
  sysModel:any;
  sysManufact:any;
  timeZone:any;


  constructor(public http: HttpClient,
    public reportDataService : ReportDataService,) { }
  onClick1(){
    this.hide1=!this.hide1;

  }
  onClick2(){
    this.hide2=!this.hide2;

  }
  onClick3(){
    this.hide3=!this.hide3;

  }
  onClick4(){
    this.hide4=!this.hide4;

  }
  onExpand1(){
    this.expand1=!this.expand1;
  }

  onExpand2(){
    this.expand2=!this.expand2;
  }
  onExpand3(){
    this.expand3=!this.expand3;
  }
  ngOnInit(): void {
    this.extractData();
    this.graphData();
  }
  extractData(){
    this.reportDataService.getServerInfo().subscribe((data:any)=>{
      console.log("serverinfodata", data);
      this.timeZone=data.timezone;
      this.pId=data.productID;
      this.regorg = data.registeredOrganisation;
      this.regown = data.registeredOwner;
      this.sysManufact = data.systenManufacturer;
      this.syslocale = data.systemLocale;
      this.systype = data.SystemType;
      this.serverName = data.serverName;
      this.sysModel = data.systemModel;      
    })

  // "id": 1,
  // "timezone": "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",
  // "productID": "00330-52466-06258-AAOEM",
  // "SystemType": "64-bit",
  // "serverName": "P0190470",
  // "systemModel": "HP ProBook 440 G6",
  // "systemLocale": "en-US",
  // "registeredOwner": "Pactera",
  // "systenManufacturer": "HP",
  // "registeredOrganisation": ""
}

graphData(){
  const data= {
    chart: {
      type: 'solidgauge'
    },
  
    title: null,
  
    pane: {
      center: ['50%', '85%'],
      size: '100%',
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
        innerRadius: '60%',
        outerRadius: '100%',
        shape: 'arc'
      }
    },
  
    exporting: {
      enabled: false
    },
  
    tooltip: {
      enabled: false
    },
  
    // the value axis
    yAxis: {
      stops: [
        [0.1, '#55BF3B'], // green
        [0.5, '#DDDF0D'], // yellow
        [0.9, '#DF5353'] // red
      ],
      lineWidth: 0,
      tickWidth: 0,
      minorTickInterval: null,
      tickAmount: 2,
      title: {
        y: -70
      },
      labels: {
        y: 16
      }
    },
  
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 5,
          borderWidth: 0,
          useHTML: true
        }
      }
    }
  };
  
  // The speed gauge
  const chartSpeed = Highcharts.chart('container-speed', Highcharts.merge(data, {
    yAxis: {
      min: 0,
      max: 16,
      title: {
        text: '<strong style="font-size:25px">Total CPU</strong>'
      }
    },
  
    credits: {
      enabled: false
    },
  
    series: [{
      name: 'CPU',
      data: [4],
      dataLabels: {
        format:
          '<div style="text-align:center">' +
          '<span style="font-size:25px">{y}</span><br/>' +
          '<span style="font-size:12px;opacity:0.4">Logical Processors</span>' +
          '</div>'
      },
      tooltip: {
        valueSuffix: 'Logical Processors'
      }
    }]
  
  }));
  
  // The RPM gauge
   const chartRpm = Highcharts.chart('container-rpm', Highcharts.merge(data, {
    yAxis: {
      min: 0,
      max: 16,
      title: {
        text: '<strong style="font-size:25px">Total Memory</strong>'
      }
    },
    credits:{
      enabled:false
    },
  
    series: [{
      name: 'Memory',
      data: [8],
      dataLabels: {
        format:
          '<div style="text-align:center">' +
          '<span style="font-size:25px">{y:.1f}</span><br/>' +
          '<span style="font-size:12px;opacity:0.4">' +
          'MB/GB' +
          '</span>' +
          '</div>'
      },
      tooltip: {
        valueSuffix: ' revolutions/min'
      }
    }]
  
  }));
  
  // Bring life to the dials
  // setInterval(function () {
  //   // Speed
  //   var point,
  //     newVal,
  //     inc;
  
    // if (chartSpeed) {
  //     point = chartSpeed.series[0].points[0];
  //     inc = Math.round((Math.random() - 0.5) * 100);
  //     newVal = point.y + inc;
  
  //     if (newVal < 0 || newVal > 200) {
  //       newVal = point.y - inc;
  //     }
  
      // point.update(newVal);
    // }
  
    // RPM
    // if (chartRpm) {
    //   point = chartRpm.series[0].points[0];
    //   inc = Math.random() - 0.5;
    //   newVal = point.y + inc;
  
    //   if (newVal < 0 || newVal > 5) {
    //     newVal = point.y - inc;
    //   }
  
    //   point.update(newVal);
    // }
  // }, 2000);
  
  
  // virtual memory logic
  const gaugeOptions = {
    chart: {
      type: 'solidgauge'
    },
  
    title: null,
  
    pane: {
      center: ['50%', '85%'],
      size: '100%',
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
        innerRadius: '60%',
        outerRadius: '100%',
        shape: 'arc'
      }
    },
  
    exporting: {
      enabled: false
    },
  
    tooltip: {
      enabled: false
    },
  
    // the value axis
    yAxis: {
      stops: [
        [0.1, '#55BF3B'], // green
        [0.5, '#DDDF0D'], // yellow
        [0.9, '#DF5353'] // red
      ],
      lineWidth: 0,
      tickWidth: 0,
      minorTickInterval: null,
      tickAmount: 2,
      title: {
        y: -70
      },
      labels: {
        y: 16
      }
    },
  
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 5,
          borderWidth: 0,
          useHTML: true
        }
      }
    }
  };
  
  // The speed gauge
 const chartSpeed1 = Highcharts.chart('container-speed1', Highcharts.merge(gaugeOptions, {
    yAxis: {
      min: 0,
      max: 31479 ,
      title: {
        text: '<strong style="font-size:25px">Virtual Memory</strong>'
      }
    },
  
    credits: {
      enabled: false
    },
  
    series: [{
      name: 'VM',
      data: [25242],
      dataLabels: {
        format:
          '<div style="text-align:center">' +
          '<span style="font-size:25px">{y}</span><br/>' +
          '<span style="font-size:12px;opacity:0.4">VM</span>' +
          '</div>'
      },
      tooltip: {
        valueSuffix: 'Logical Processors'
      }
    }]
  
  }));
  
  // The RPM gauge
  const chartRpm1 = Highcharts.chart('container-rpm1', Highcharts.merge(gaugeOptions, {
    yAxis: {
      min: 0,
      max: 16,
      title: {
        text: 'Total Memory'
      }
    },
    credits:{
      enabled:false
    },
  
    series: [{
      name: 'Memory',
      data: [8],
      dataLabels: {
        format:
          '<div style="text-align:center">' +
          '<span style="font-size:25px">{y:.1f}</span><br/>' +
          '<span style="font-size:12px;opacity:0.4">' +
          'MB/GB' +
          '</span>' +
          '</div>'
      },
      tooltip: {
        valueSuffix: ' revolutions/min'
      }
    }]
  
  }));
  
  // Bring life to the dials
  // setInterval(function () {
  //   // Speed
  //   var point,
  //     newVal,
  //     inc;
  
  //   if (chartSpeed) {
  //     point = chartSpeed.series[0].points[0];
  //     inc = Math.round((Math.random() - 0.5) * 100);
  //     newVal = point.y + inc;
  
  //     if (newVal < 0 || newVal > 200) {
  //       newVal = point.y - inc;
  //     }
  // 
      // point.update(newVal);
    // }
  
    // RPM
  //   if (chartRpm) {
  //     point = chartRpm.series[0].points[0];
  //     inc = Math.random() - 0.5;
  //     newVal = point.y + inc;
  
  //     if (newVal < 0 || newVal > 5) {
  //       newVal = point.y - inc;
  //     }
  
  //     point.update(newVal);
  //   }
  // }, 2000);
}
   
  }


