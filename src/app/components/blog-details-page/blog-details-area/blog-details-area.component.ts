import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-blog-details-area',
  templateUrl: './blog-details-area.component.html',
  styleUrls: ['./blog-details-area.component.scss']
})
export class BlogDetailsAreaComponent {
  validateForm!: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder, private notification: NzNotificationService) { }

  createNotification(): void {
    this.notification
      .blank(
        `Thank you ${this.validateForm.value.name.toUpperCase()} for your comment!`,
        'We appreciate you comment. Have a great day!'
      )
      .onClick.subscribe(() => {
        console.log('notification clicked!');
      });
  }


  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submited data', this.validateForm.value);
      // alert('thank youu')
      this.createNotification()
      // Rest form
      this.validateForm.reset();

    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }



  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      name: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }
}
