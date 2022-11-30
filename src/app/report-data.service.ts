import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { catchError, Observable,retry,Subject, throwError } from 'rxjs';
import { BaseUrl,EndPoints } from '../app/api.urls.constant';
//import { archComplexityModel } from '../app/archComplexity.modules';
@Injectable({
  providedIn: 'root'
})
export class ReportDataService {
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  
 headers= new HttpHeaders()
 .set('Content-Type', 'multipart/form-data')
 .set('Access-Control-Allow-Origin', '*');
 constructor(private http : HttpClient) { 
  // super(http, 'reports');
 }
 
 getArchData(){
  return this.http.get('https://retoolapi.dev/yIbmi7/data');
}
 getDecisionTreeData(){
  return this.http.get('https://retoolapi.dev/n06gcX/serverInfo/1');
 }
 getServerInfo(){
  return this.http.get('https://retoolapi.dev/DAuU39/serverDetails/1');
 }
 getComputeInfo(){
  return this.http.get('https://retoolapi.dev/HDYBF2/compute_1/1');
 }
 getStorageInfo(){
  return this.http.get('https://retoolapi.dev/O0j2DD/Server_diskspace/1');
 }
  getPortInfo(){
    return this.http.get('https://retoolapi.dev/9lfuUO/RemotePort_Info/2');
  }
  getLocalPortInfo(){
    return this.http.get('https://retoolapi.dev/VuxwHW/LocalPort_info/2');
  }
}
