import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {

    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.minLength(3))
    });

    this.resetSession();
  }

  onSubmit(){
    
    sessionStorage.setItem("username", this.loginForm.value.username)
    this.router.navigateByUrl('/search/book-search');
  }

  get userName() {
    return this.loginForm.get('username');
} 

  resetSession(): void {
    sessionStorage.clear();
  }

}
