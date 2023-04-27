import { Component } from '@angular/core';

interface Blog {
  id: number;
  title: string;
  desc: string;
  view: number;
  message: number;
  date: string;
  month: string;
  url: string;
}

@Component({
  selector: 'app-blog-area',
  templateUrl: './blog-area.component.html',
  styleUrls: ['./blog-area.component.scss']
})
export class BlogAreaComponent {


  blogdata: Blog[] = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      desc: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      view: 545,
      message: 33,
      date: "12",
      month: "Jan",
      url: "/assets/images/blogs/1.jpg"
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet",
      desc: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      view: 45,
      message: 133,
      date: "12",
      month: "Jan",
      url: "/assets/images/blogs/2.jpg"
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet",
      desc: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      view: 145,
      message: 13,
      date: "12",
      month: "Jan",
      url: "/assets/images/blogs/3.jpg"
    }
  ]

  isVisible = false;
  modalData: any;

  constructor() { }

  showModal(blog: any): void {
    this.modalData = blog;
    this.isVisible = true;
  }


  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

}
