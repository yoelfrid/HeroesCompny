import { Component, OnInit, TemplateRef } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from './auth.service';
// import { Trainer } from 'src/app/models/Trainer.interface';
import { Router } from '@angular/router';
import { LoggerGuard } from 'src/app/guards/logger.guard';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  userForm: FormGroup;
  loginFailed: boolean = false;

  constructor(private authService: AuthService,
    private router: Router,
    private logger: LoggerGuard) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      email: new FormControl('aa@aa.com', [Validators.required, Validators.email]),
      password: new FormControl('1@RsRRYGe333', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[$@$!%*?&])(?=.*[0-9]).{8,}$')])
    });
  }

  onFormSubmit(): void {
    let formValue = this.userForm.value;

    if (this.userForm.valid) {
      if (this.authService.login(formValue.email, formValue.password)) {
        this.logger.info("heroes load")
        this.router.navigate(['heroes'])
      } else {
        this.logger.info("Login is not good")
        this.loginFailed = true
        setTimeout(() => {
          this.loginFailed = false
        }, 2000);
      }
    }
    else {
      alert("something wrong!");

    }
  }

}
