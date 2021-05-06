import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import {jwt,nodemailer,smtpTransport} from '../../../../'


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  email:any;
  userData:any;
  onSubmit(details:any){
    this.email=details.email;
    // localStorage.setItem(this.email,this.email)
    this.matchEmail().subscribe(data=>{
      if(data.book1 == null){
        console.log('user not exist');
        return;
      }
      this.userData=data.book1;
      console.log(this.userData)
      this.getForgot(this.userData).subscribe(data=>{
        console.log(data)
        const h1=document.getElementById('sentMail');
            h1!.innerHTML='Please verify link';
            h1!.style.color='red'
      })
    })
  }
  getForgot(user:any): Observable<any> {
    return this.http.post(`http://localhost:3000/forgot`,user);
  }

  matchEmail(): Observable<any> {
    return this.http.get(`http://localhost:3000/forms/${this.email}`);
  }
}
