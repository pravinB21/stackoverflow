import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Route} from '@angular/compiler/src/core';
import {ActivatedRoute,ParamMap,Router} from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private http: HttpClient,private route:ActivatedRoute,private router:Router) { }
id:any;
token:any;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.id=params.get('id');
      this.token=params.get('token');
    })
    console.log(this.id,this.token)
  }
userData:any;
  onSubmit(details:any){
    console.log(details)
    this.userData=details;
    this.updatePass(this.userData).subscribe(data=>{
      console.log(data)
    })


  }

  updatePass(user: any): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/forms/${this.id}`,user);
  }
}
