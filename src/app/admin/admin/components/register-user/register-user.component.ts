import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  name!: string;
  constructor(private formBuilder: FormBuilder) {

  }

  userForm = this.formBuilder.group(
    {
      "firstName": ['', [Validators.required]],
      "lastName": ['', [Validators.required]],
      "email": ["", Validators.email, Validators.required],
      "phone": ["", Validators.required, Validators.minLength(10)]
    }
  )

  get firstName() {
    return this.userForm.get('firstName');
  }

  get lastName() {
    return this.userForm.get("lastName");
  }
  get email() {
    return this.userForm.get("email");
  }
  get phone() {
    return this.userForm.get("phone");
  }


  ngOnInit(): void {
    this.name = "MDS";
    // child.devsName = 'm';
  }

  onSubmit() {
    // console.log('ngAfterContentInit - wrapper', this.wrapper);
    // console.log('ngAfterContentInit - content', this.content);
  }

}
