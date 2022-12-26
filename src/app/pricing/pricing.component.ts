
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import  data from '../jsondata/fdata.json';
// import jsPDF from 'jspdf'; 
//  import html2canvas from 'html2canvas';
 import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { CookieService } from 'ngx-cookie-service';
import { ReportDataService } from '../report-data.service';


export interface Series{
  meterName1:any,
  ram1:any,
  meterName2:any,
  ram2:any,
  meterName3:any,
  ram3:any,
  armskuname1:any,
  armskuname2:any,
  armskuname3:any,
  price1:any,
  price2:any,
  price3:any

}

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit,Series {
  title = 'Multi_Cloud_ROI';
  meterName: any;
  var:any;
  pdfmake: any;
  showPopup: Boolean = true;
  showPricing: boolean = false ;

  constructor(
    private activatedRoute:ActivatedRoute,
    public cookie : CookieService,
    public reportDataService : ReportDataService) { }
  armskuname1: any;
  armskuname2: any;
  armskuname3: any;
  price1: any;
  price2: any;
  price3: any;
  meterName1: any;
  ram1: any;
  meterName2: any;
  ram2: any;
  meterName3: any;
  ram3: any;

  spotvmprice1:any;
  spotvmprice2:any;
  spotvmprice3:any;

  reservedvmprice1:any;
  reservedvmprice2:any;
  reservedvmprice3:any;

  logicalProcessor:any;


  //jsonData: any[] = data;
  data_filter:any;
  complexitylength:any;
  archcomplexity:any;
  mname:string="";
  ram:any;
  priceArray:any=[];
  titleEnvName:any;
  data:Series=<any>[];
  suggestion:any;
  content : any[] = [];
  arrdata : any[] = [];

  series1:any;
  series2:any;
  series3:any;

  clusterPrice1:any;
  clusterPrice2:any;
  clusterPrice3:any;

  servername:any;
  
        
  images: any = [
    {
      url:'assets/images/Azure-ROI.png',
      title: 'azure'
    },
    {
      url:'assets/images/aws-ROI.png',
      title: 'aws'
    },
    {
      url:'assets/images/GCP-ROI.png',   
      title: 'google-cloud'
    },
  ]


  ngOnInit() {
    ///passing parameters as input from a file
    setTimeout(()=>{
      this.showPopup = false;
      this.showPricing = true;
    }, 1000);
    this.suggestion = "Google"
    this.fillData();
    console.log("in pricing")
   
  }    
  fillData(){

    this.reportDataService.getInfoFromDiscovery().subscribe((data:any)=>{
      this.titleEnvName  = data.serverName;
      console.log("data from decision", data)
    });

    this.reportDataService.getDecisionTreeData().
        subscribe((data: any) => {

          let len = data.length;
      // to get the last item in array
      console.log("len",data)

      for(let i=0;i<len;i++){
        
        if( data[i].serverName == this.titleEnvName  ){
          let count=2;
          console.log("count",count)
          // this.titleEnvName  = data[i].serverName;
          this.logicalProcessor = data[i].logicalProcessor;
          this.pricingCalculation(this.logicalProcessor);
        }
      }  

        })

    // this.reportDataService.getArchData().subscribe((data:any) =>{
    //   let len = (data.length - 1);
    //   // to get the last item in array
    //   console.log("len", len)
    //   let itemsLen =  Object.keys(data[len]).length
    //   // to get the no.of key pair values at a give index
    //   console.log("data in get", data[len].Env_Name)
    //   this.titleEnvName = data[len].Env_Name;
    //  // console.log(data[len][1], "data item")
    //     for(let i=2,j=1;i<itemsLen;i++,j++){
    //       this.archcomplexity = data[len]['App_Arch_Complexity_'+j];
    //       console.log("inside for loop",this.archcomplexity)
    //       this.pricingCalculation(this.archcomplexity);
          
    //     }
     

      //console.log("complexity data in api", data[0].Arch_Complexity)

   
  }
  pricingCalculation(e:any){
      if(e==4){
        //logical processor 4
        //this.mname='F4s v2';
        // this.data.ram1='8 GB';
        // this.data.ram2='8 GB';
        // this.data.ram3='16 GB';
        // this.data.meterName1="F4s v2";
      
        
        this.priceArray.push({ram1:'8 GB',
        ram2:'8 GB',
        ram3:'16 GB',
        meterName1:"F4s v2",
        meterName2:'c4.xlarge',
        meterName3:'c2 series',
        armskuname1:'Standard_F4s_v2',
        armskuname2:'EC2_4.xlarge',
        armskuname3:'c2-standard-4',
        price1:'0.169',
        price2:'0.199',
        price3:'0.167' ,
        spotvmprice1:'11.88',
        spotvmprice2:'0',
        spotvmprice3:'0',
        reservedvmprice1:'57.39',
        reservedvmprice2: '0',
        reservedvmprice3:'0',
        clusterPrice1:'78.16',
        clusterPrice2:'0',
        clusterPrice3:'0',
        series1:'F_Series',
        series2:'',
        series3:'',
        reservedAKS:'60.05',
        reservedEKS:'0',
        reservedGKS:'0',
        webAppPrice1:'219.00',
        webAppPrice2:'',
        webAppPrice3:'',
        webAppSeries1:' Basic B3',
        webAppSeries2:'',
        webAppSeries3:'',
        webApp1ram1:'7 GB',
        webApp2ram2:'',
        webApp3ram3:'',
        dbSeriesram1:' 4vcore',
        dbSeriesram2:'',
        dbSeriesram3:'',
        dbSeriesName1:'Standard-series(GEN 5)',
        dbSeriesName2:'',
        dbSeriesName3:'',
        dbPrice1:'736.37',
        dbPrice2:'0',
        dbPrice3:'0',


        
      
      })
      }
      //console.log("testing content",this.data_filter)
      if(e==6){
        //logical processor 6
        this.priceArray.push({ram1:'16 GB',
        ram2:'16 GB',
        ram3:'32 GB',
        meterName1:"F8s v2",
        meterName2:'c4.2xlarge',
        meterName3:'c2 series',
        armskuname1:'Standard_F8s_v2',
        armskuname2:'EC2_4.2xlarge',
        armskuname3:'c2-standard-8',
        price1:'0.338',
        price2:'0.398',
        price3:'0.334'  ,
        spotvmprice1:'23.85' ,
        spotvmprice2:'0',
        spotvmprice3:'0',
        reservedvmprice1:'114.78',
        reservedvmprice2: '0',
        reservedvmprice3:'0',
        clusterPrice1:'151.16',
        clusterPrice2:'0',
        clusterPrice3:'0',
        series1:'F_Series',
        series2:'',
        series3:'',
        reservedAKS:'115.14',
        reservedEKS:'0',
        reservedGKS:'0',
        webAppPrice1:'292.00',
        webAppPrice2:'',
        webAppPrice3:'',
        webAppSeries1:'Standard S3 ',
        webAppSeries2:'',
        webAppSeries3:'',
        webApp1ram1:'7 GB',
        webApp2ram2:'',
        webApp3ram3:'',
        dbSeriesram1:'6Vcore',
        dbSeriesram2:'',
        dbSeriesram3:'',
        dbSeriesName1:'Standard-series(GEN 5)',
        dbSeriesName2:'',
        dbSeriesName3:'',
        dbPrice1:'1104.56',
        dbPrice2:'0',
        dbPrice3:'0',
        
      
      })
        
      }
      if(e>=8){
       
 //logical processor 8 || greater than 8
        this.priceArray.push({ram1:'32 GB',
        ram2:'32 GB',
        ram3:'64 GB',
        meterName1:"F16s v2",
        meterName2:'c4.4xlarge',
        meterName3:'c2 series',
        armskuname1:'Standard_F16s_v2',
        armskuname2:'EC2_4.4xlarge',
        armskuname3:'c2-standard-16',
        price1:'0.677',
        price2:'0.796',
        price3:'0.668' ,
        spotvmprice1:'47.70'  ,
        spotvmprice2:'0',
        spotvmprice3:'0',
        reservedvmprice1:'229.59',
        reservedvmprice2: '0',
        reservedvmprice3:'0',
        clusterPrice1:'296.43',
        clusterPrice2:'0',
        clusterPrice3:0,
        series1:'F_Series',
        series2:'',
        series3:'',
        reservedAKS:'222.89',
        reservedEKS:'0',
        reservedGKS:'0',
        webAppPrice1:'919.80',
        webAppPrice2:'',
        webAppPrice3:'',
        webAppSeries1:'Premium V3',
        webAppSeries2:'',
        webAppSeries3:'',
        webApp1ram1:'32 GB',
        webApp2ram2:'',
        webApp3ram3:'',
        dbSeriesram1:'8Vcore',
        dbSeriesram2:'',
        dbSeriesram3:'',
        dbSeriesName1:'Standard-series(GEN 5)',
        dbSeriesName2:'',
        dbSeriesName3:'',
        dbPrice1:'1472.75',
        dbPrice2:'0',
        dbPrice3:'0',
        
      
      })
      }
    //   this.priceArray.push(this.data)
    //  // this.priceArray.push(this.ram)
    //   console.log("Array content",this.priceArray);
      //console.log(this.data_filter[0].unitPrice,this.data_filter[0].armSkuName)

  }
  // dataFilter(meterName:string){
  
  //   console.log()
  //   this.data_filter = this.jsonData.filter(
  //     (element) => element.type ==="DevTestConsumption" && element.meterName==meterName)
     
  //     return this.data_filter.unitPrice;

  // }
 // @ViewChild('content',{static:false}) content!: ElementRef ;  
  savePDF(){
    
      let DATA: any = document.getElementById('content');
      html2canvas(DATA).then((canvas) => {
        let fileWidth = 208;
       
        
        console.log("height , width",canvas.height,canvas.width)
        let fileHeight = (canvas.height * fileWidth) / canvas.width;
       
        console.log("file height",fileHeight)
        const FILEURI = canvas.toDataURL('image/png');
        let PDF = new jsPDF('p',"mm","a4");
        let position = 0;
       
        PDF.addImage(FILEURI,'png', 0, position,fileWidth,fileHeight)
              let today = new Date();
              let dd = String(today.getDate()).padStart(2, '0');
              let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
              let yyyy = today.getFullYear();

              let todayDate =  dd + mm +  yyyy;
             PDF.save(this.titleEnvName+' Multi-Cloud-ROI_'+todayDate+'.pdf');
      });

    }
    
  //  savePDF(){
  //       pdfMake.vfs = pdfFonts.pdfMake.vfs;
  //     const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
  //     this.pdfmake.createPdf(documentDefinition).open();
  //    }
   }
      //canvas.width = 1000;
         // canvas.width=1900;
        // canvas.height=1900;height , width 1068 1192
         //let fileHeight = 186.36;
          //PDF.addImage(FILEURI, 'png', 0, position,fileWidth,fileHeight,'NONE');
   


  
 
