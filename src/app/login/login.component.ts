import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
// import { LoginService } from "./login.service";
// import { AlertOnRightService } from "../alert-on-right/alert-on-right.service";
import { AppComponent } from "../app.component";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private appComponent : AppComponent,private formBuilder: FormBuilder, private router: Router,) { }
  loading = false;

  ngOnInit() {
    // if(localStorage.getItem("EmpData") ==null || localStorage.getItem("EmpData") == undefined){
    //   localStorage.setItem("EmpData",JSON.stringify([]))
    // }
  }

  loginForm = this.formBuilder.group({
    "username": "",
    "password": ""
  })

  onSubmit() {
    // this.loginForm.controls['username'].setValue(this.loginForm.controls['username'].value.trim())
    if (this.loginForm.controls['username'].value == "") {
      // this.alertOnRightService.showAlertOnRight("Please enter username.", false);
    }
    else if (this.loginForm.controls['password'].value == "") {
      // this.alertOnRightService.showAlertOnRight("Please enter password.", false);
    }
    else {
        
        if(this.loginForm.controls['username'].value=="John" && this.loginForm.controls['password'].value=="John"){
          this.appComponent.title = this.loginForm.controls['username'].value
          localStorage.setItem("currentUser",this.loginForm.controls['username'].value)
          this.router.navigate(["/dashboard"])
        }else{
          console.log("Invalid User and Password")
        
        }
           
      

    }
  }
}
