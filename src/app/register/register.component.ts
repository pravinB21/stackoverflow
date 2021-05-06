import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient) { }
  user1 = new User("", "", "", "", "");
  emailmatch: any;
objdata:any
token:any;
  invalidemail(){
    this.matchEmail().subscribe(data=>{
      
      if(data.book1 != null){
        this.token=1;
      }else{
        this.token=0;
      }
    })
  }

  onSubmit() {
    console.log(this.user1)
    this.getData().subscribe((data: any) => {
      console.log(data);
    });
    
    this.postData(this.user1).subscribe(data => {
      const h1=document.getElementById('h3') 
      h1!.innerHTML='Registered Successfully !!';
      const h2=document.getElementById('h1') 
      h2!.innerHTML='Verification link has been sent to your mail !!';
      console.log('submitted successfully', data) 
    });
  }


  //api's
  getData(): Observable<any> {
    return this.http.get('http://localhost:3000/forms');
  }

  postData(user1: any) {
    return this.http.post('http://localhost:3000/forms', user1);
  }

  matchEmail(): Observable<any> {
    return this.http.get(`http://localhost:3000/forms/${this.user1.email}`);
  }
  ngOnInit(): void {
  }

}
