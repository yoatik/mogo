import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header-area',
  templateUrl: './header-area.component.html',
  styleUrls: ['./header-area.component.scss']
})
export class HeaderAreaComponent {

  navbarfixed: boolean = false;


  isVisible = false;

  constructor() {}

  showSearchModal(): void {
    this.isVisible = true;
    console.log("faf")
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }


  @HostListener('window:scroll', ['$event']) onscroll() {

    if (window.scrollY > 100) {
      this.navbarfixed = true;
    }
    else {
      this.navbarfixed = false;
    }
  }

  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

}


