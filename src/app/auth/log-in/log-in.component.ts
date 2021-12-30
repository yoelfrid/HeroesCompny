import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from './auth.service';
// import { Trainer } from 'src/app/models/Trainer.interface';
import { Router } from '@angular/router';
import { LogerGuard } from 'src/app/loger.guard';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  userForm: FormGroup;
  loginFailed:boolean = false;
  constructor(private authService: AuthService, private router: Router,private logger:LogerGuard) { }
  submitted = false;

  ngOnInit(): void {
    this.userForm = new FormGroup({
      email: new FormControl('aa@aa.com', [Validators.required, Validators.email]),
      password: new FormControl('1@RsRRYGe333', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[$@$!%*?&])(?=.*[0-9]).{8,}$')])
    });
  }

  onFormSubmit(): void {
    // console.log('password:', this.userForm.controls['password'].errors);
    // console.log('email:',this.userForm.get('email')?.errors);
    const formValue = this.userForm.value;
    // console.log("formValue ",formValue.email);
    // if(this.userForm.invalid){
    //   console.log("aaaaaa");
      
    // }
    if(this.userForm.valid){
      if(this.authService.login(formValue.email, formValue.password)){
        this.logger.info("heroes load")
        this.router.navigate(['heroes'])
      } else {
        console.log(this.loginFailed);
        
        this.loginFailed = true
        // console.log(this.loginFailed);

        // alert("login failed");
      }
    } 
    else {
      // alert("something wrong! ");
      console.log(this.userForm);
      
    }
  }

}
