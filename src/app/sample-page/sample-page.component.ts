import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReportDataService } from '../report-data.service';
import { Chart } from 'angular-highcharts';

let Highcharts = require('highcharts');
// require('highcharts/highcharts-more.js')(Highcharts);



interface ExtendedRenderer extends Highcharts.SVGRenderer {
  path(path?: any): Highcharts.SVGElement;
}

interface ExtendedChart extends Highcharts.PlotPackedbubbleOptions {
  layoutAlgorithm: {
    splitSeries: any;
  };
}


@Component({
  selector: 'app-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.css']
})
export class SamplePageComponent implements OnInit {

  hide1: boolean = true;
  hide2: boolean = true;
  hide3: boolean = true;
  hide4: boolean = true;
  hide5: boolean = true;
  hide6: boolean = true;

  isHidden1: any = true;
  isHidden2: any = true;
  isHidden3: any = true;
  isHidden4: any = true;
  isHidden5: any = true;
  isHidden6: any = true;
  isHidden7: any = true;
  isHidden8: any = true;
  isHidden9: any = true;

  hideSideBar:any =true;

  count1: any;
  count2: any;
  count3: any;
  count4: any;
  count5: any;
  count6: any;

  systype: any;
  pId: any;
  regorg: any;
  regown: any;
  serverName: any;
  syslocale: any;
  sysModel: any;
  sysManufact: any;
  timeZone: any;

  totalCPU: any;
  vmemoryinuse: any;
  vmemorymaxsize: any;
  usedMemoryMB: any;
  serverRebootTime: any;
  totalMemoryMB: any;
  serverProvisionDate: any;
  usedLogicalProcessors: any;

  size: any[] = [];
  drivertype: any[] = [];
  drive: any[] = [];
  freeSpace: any[] = [];
  healthStatus: any[] = [];
  fileSystemType: any[] = [];

  compute: any[] = [{}];

  ipAddress:any[] = [];
  portNumber:any[]=[];
  dataSeries:any[]=[];
  internalSeries:any[]=[];

  localIP:any[] =[];
  localPort:any[]=[];
  localDataSeries:any[]=[];
  localInternalSeries:any[]=[];

  chart: typeof Highcharts = Highcharts;
  constructor(public http: HttpClient,
    public reportDataService: ReportDataService) { }

  generateChart: typeof Highcharts = Highcharts;

  chartOptions2: Highcharts.Options = {

    navigation: {
      buttonOptions: {
          enabled:false
      }
  },
  credits:{
    enabled:false
  },
    chart: {
      height:200,
      backgroundColor: 'white',
      events: {
        load: function () {
          // Draw the flow chart
          let ren = this.renderer as ExtendedRenderer,
            colors = Highcharts.getOptions().colors,
            rightArrow = [
              'M',
              0,
              0,
              'L',
              100,
              0,
              'L',
              95,
              5,
              'M',
              100,
              0,
              'L',
              95,
              -5,
            ],
            leftArrow = [
              'M',
              100,
              0,
              'L',
              0,
              0,
              'L',
              5,
              5,
              'M',
              0,
              0,
              'L',
              5,
              -5,
            ];

          // Separator, client from service
          ren
            .path(['M', 120, 40, 'L', 120, 330])
            .attr({
              'stroke-width': 2,
              stroke: 'silver',
              dashstyle: 'dash',
            })
            .add();

          // Separator, CLI from service
          ren
            .path(['M', 420, 40, 'L', 420, 330])
            .attr({
              'stroke-width': 2,
              stroke: 'silver',
              dashstyle: 'dash',
            })
            .add();

          // Headers
          ren
            .label('Front End client', 20, 40)
            .css({
              fontWeight: 'bold',
            })
            .add();
          ren
            .label('Backend Server', 220, 40)
            .css({
              fontWeight: 'bold',
            })
            .add();
          ren
            .label('Dependencies', 440, 40)
            .css({
              fontWeight: 'bold',
            })
            .add();

          // SaaS client label
          ren
            .label('.NET client<br/>(browser or<br/>script)', 10, 82)
            .attr({
              fill: colors[0],
              stroke: 'white',
              'stroke-width': 2,
              padding: 5,
              r: 5,
            })
            .css({
              color: 'white',
            })
            .add()
            .shadow(true);

          // Arrow from SaaS client to Phantom JS
          ren
            .path(rightArrow)
            .attr({
              'stroke-width': 2,
              stroke: colors[3],
            })
            .translate(95, 95)
            .add();

          ren
            .label('Port using Number', 90, 75)
            .css({
              fontSize: '10px',
              color: colors[3],
            })
            .add();

          ren
            .label('DB Server Name', 210, 82)
            .attr({
              r: 5,
              width: 100,
              fill: colors[1],
            })
            .css({
              color: 'white',
              fontWeight: 'bold',
            })
            .add();

          // Arrow from Phantom JS to Batik
          ren
            .path([
              'M',
              250,
              110,
              'L',
              250,
              185,
              'L',
              245,
              180,
              'M',
              250,
              185,
              'L',
              255,
              180,
            ])
            .attr({
              'stroke-width': 2,
              stroke: colors[3],
            })
            .add();

          ren
            .label('Port Number', 255, 120)
            .css({
              color: colors[3],
              fontSize: '10px',
            })
            .add();

          ren
            .label('Database', 210, 200)
            .attr({
              r: 5,
              width: 100,
              fill: colors[1],
            })
            .css({
              color: 'white',
              fontWeight: 'bold',
            })
            .add();

          // Arrow from Batik to SaaS client
          ren
            .path([
              'M',
              235,
              185,
              'L',
              235,
              155,
              'C',
              235,
              130,
              235,
              130,
              215,
              130,
              'L',
              95,
              130,
              'L',
              100,
              125,
              'M',
              95,
              130,
              'L',
              100,
              135,
            ])
            .attr({
              'stroke-width': 2,
              stroke: colors[3],
            })
            .add();

          ren
            .label('Port Using Number', 100, 110)
            .css({
              color: colors[3],
              fontSize: '10px',
            })
            .add();

          // Browser label

          // Script label
          ren
            .label('Script', 450, 82)
            .attr({
              fill: colors[2],
              stroke: 'white',
              'stroke-width': 2,
              padding: 5,
              r: 5,
            })
            .css({
              color: 'white',
              width: 100,
            })
            .add()
            .shadow(true);

          // Arrow from Script to PhantomJS
          ren
            .path(leftArrow)
            .attr({
              'stroke-width': 2,
              stroke: colors[2],
            })
            .translate(330, 90)
            .add();

          ren
            .label('Command', 340, 70)
            .css({
              color: colors[2],
              fontSize: '10px',
            })
            .add();

          // Arrow from PhantomJS to Script
          ren
            .path(rightArrow)
            .attr({
              'stroke-width': 2,
              stroke: colors[2],
            })
            .translate(330, 100)
            .add();

          ren
            .label('Services', 330, 100)
            .css({
              color: colors[2],
              fontSize: '10px',
            })
            .add();
        },
      },
    },
    title: {
      text: 'Server Architecture',
      style: {
        color: 'black',
      },
    },
    accessibility: {
      typeDescription: 'Flowchart',
    },
  };

  networkChart:any;
  localChart:any;
 
  

 
 
  packBubblechart: typeof Highcharts = Highcharts;
  chartOptions3: Highcharts.Options={
    chart: {
      renderTo: "container",
      type: "packedbubble",
      height: "100%"
    },
    title: {
      text: "Carbon emissions around the world (2014)"
    },
    tooltip: {
      useHTML: true,
      pointFormat: "<b>{point.name}:</b> {point.value}m CO<sub>2</sub>"
    },
    plotOptions: {
      packedbubble: {
        minSize: "20%",
        maxSize: "100%",
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
          format: "{point.name}",
          style: {
            color: "black",
            textOutline: "none",
            fontWeight: "normal"
          }
        }
      } as ExtendedChart
    },
    series: [
      {
        type: "packedbubble",
        name: "Network",
        data: [
          {
            name: "Domain1",
            value: 4
          },
          {
            name: "Domain2",
            value: 450
          }
        ]
      }
    ]


  }
  onClick1() {
    this.hide1 = !this.hide1;
    this.hide2 = true;
    this.hide3 = true;
    this.hide4 = true;
    this.hide5 = true;
    this.hide6 = true;
  }
  onClick2() {
    this.hide2 = !this.hide2;
    this.hide1 = true;
    this.hide3 = true;
    this.hide4 = true;
    this.hide5 = true;
    this.hide6 = true;
  }
  onClick3() {
    this.hide3 = !this.hide3
    this.hide2 = true;
    this.hide1 = true;
    this.hide4 = true;
    this.hide5 = true;
    this.hide6 = true;
  }
  onClick4() {
    this.hide4 = !this.hide4;
    this.hide2 = true;
    this.hide3 = true;
    this.hide1 = true;
    this.hide5 = true;
    this.hide6 = true;
  }
  onClick5() {
    console.log("clicked storage")
    this.hide5 = !this.hide5;
    this.hide2 = true;
    this.hide3 = true;
    this.hide4 = true;
    this.hide1 = true;
    this.hide6 = true;
  }
  onClick6() {
    this.hide6 = !this.hide6
    this.hide2 = true;
    this.hide3 = true;
    this.hide4 = true;
    this.hide5 = true;
    this.hide1 = true;
  }
  onSubCLick1() {
    this.isHidden1 = !this.isHidden1;
  }
  onSubCLick2() {
    this.isHidden2 = !this.isHidden2;
  }
  onSubCLick3() {
    this.isHidden3 = !this.isHidden3;
  }
  onSubCLick4() {
    this.isHidden4 = !this.isHidden4;
  }
  onSubCLick5() {
    this.isHidden5 = !this.isHidden5;
  }
  onSubCLick6() {
    this.isHidden6 = !this.isHidden6;
  }
  onSubCLick7() {
    this.isHidden7 = !this.isHidden7;
  }
  onSubCLick8() {
    this.isHidden8 = !this.isHidden8;
  }
  onSubCLick9() {
    this.isHidden9 = !this.isHidden9;
  }


  ngOnInit(): void {

    this.extractData();
     
      
  }

  extractData() {

    this.reportDataService.getServerInfo().subscribe((data: any) => {
      if (data.registeredOrganisation == "") {
        this.count1 = (Object.keys(data).length - 2);
        this.regorg = "N/A";
      }
      else {
        this.count1 = Object.keys(data).length - 1;
        this.regorg = data.registeredOrganisation;
      }

      console.log("serverinfodata", data);
      this.timeZone = data.timezone;
      this.pId = data.productID;


      this.regown = data.registeredOwner;
      this.sysManufact = data.systenManufacturer;
      this.syslocale = data.systemLocale;
      this.systype = data.SystemType;
      this.serverName = data.serverName;
      this.sysModel = data.systemModel;
    });
    this.reportDataService.getComputeInfo().subscribe((data: any) => {
      console.log("data in compute", data)

      this.totalCPU = data.totalCPU;
      this.vmemoryinuse = data.vmemoryinuse;
      this.vmemorymaxsize = data.vmemorymaxsize;
      this.usedMemoryMB = data['usedMemoryMB/GB'];
      this.serverProvisionDate = data.serverProvisionDate;
      this.serverRebootTime = data.serverRebootTime;
      this.totalMemoryMB = data['totalMemoryMB/GB'];
      this.usedLogicalProcessors = data.usedLogicalProcessors;


      this.compute = [
        { label: 'total CPU', value: this.totalCPU },
        { label: 'Virtual Memory in use', value: this.vmemoryinuse },
        { label: 'Virtual Memory Maximum size', value: this.vmemorymaxsize },
        { label: 'Used Memory in MB/GB', value: this.usedMemoryMB },
        { label: 'Server Provision Date', value: this.serverProvisionDate },
        { label: 'Server Reboot Time', value: this.serverRebootTime },
        { label: 'Total Memory in MB/GB', value: this.totalMemoryMB },
        { label: 'Used Logical Processors', value: this.usedLogicalProcessors }
      ]


    });
    this.reportDataService.getStorageInfo().subscribe((data: any) => {
      this.size = data['Size'];
      this.drivertype = data["Drive Type"];
      this.drive = data['Drive Letter'];
      this.freeSpace = data["Free Space"];
      this.healthStatus = data['Health Status'];
      this.fileSystemType = data['FileSystem Type'];
    }
    );
    
    this.reportDataService.getPortInfo().subscribe((data:any)=>{
     
       this.ipAddress = data.RemoteAddress;
       this.portNumber = data.RemotePort;

       for(let j=0;j<this.portNumber.length; j++){
        this.internalSeries=[];
      
          this.internalSeries.push(this.ipAddress[j].toString());
          this.internalSeries.push(this.portNumber[j].toString());      
          this.dataSeries.push(this.internalSeries)     
        
       }
       console.log("data series",this.dataSeries)
       this.networkChart = new Chart({
    
        chart: {
          type: 'networkgraph',
          height: '200',
          
        },
        navigation: {
          buttonOptions: {
            enabled: false
          }
        },
        credits: {
          enabled: false
        },
        title: {
          text: 'The Networking Tree - Remote IP'
        },
        subtitle: {
          text: 'A Server-Directed Network Graph'
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
              radius: 8
            },
    
            type: 'networkgraph',
            dataLabels: {
              enabled: true
            },
            
            data: this.dataSeries
            
            //  [ ['192.168.1.5', '80'],
    
            //   ['192.168.1.5', '80'],]
    
           
          }
        ],
    
    
    
      })
      
      
        
    });
    
    this.reportDataService.getLocalPortInfo().subscribe((data:any)=>{
      
      this.localIP = data.LocalAddress;
      this.localPort = data.LocalPort;

      for(let j=0;j<this.localPort.length; j++){
        this.localInternalSeries=[];
      
          this.localInternalSeries.push(this.localIP[j].toString());
          this.localInternalSeries.push(this.localPort[j].toString());      
          this.localDataSeries.push(this.localInternalSeries)     
        
       }
     
       this.localChart = new Chart({
    
        chart: {
          type: 'networkgraph',
          height: '200',
          
        },
        navigation: {
          buttonOptions: {
            enabled: false
          }
        },
        credits: {
          enabled: false
        },
        title: {
          text: 'The Networking Tree - Local IP'
        },
        subtitle: {
          text: 'A Server-Directed Network Graph'
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
              radius: 8
            },
    
            type: 'networkgraph',
            dataLabels: {
              enabled: true
            },
            
            data: this.localDataSeries
            
            //  [ ['192.168.1.5', '80'],
    
            //   ['192.168.1.5', '80'],]
    
           
          }
        ],
    
    
    
      })
      

    })


    
    
     
  }


  addPoint(data1:any[]) {
    if (this.networkChart) {
      this.networkChart.addPoint(data1);
    } 
  }
 
  openNav() {
    this.hideSideBar=!this.hideSideBar;  
  }  
  closeNav() {
    this.hideSideBar=true; 
  }  
}