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
  selector: 'app-blog-page-area',
  templateUrl: './blog-page-area.component.html',
  styleUrls: ['./blog-page-area.component.scss']
})
export class BlogPageAreaComponent {

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
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet",
      desc: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      view: 145,
      message: 13,
      date: "12",
      month: "Jan",
      url: "/assets/images/blogs/4.jpg"
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet",
      desc: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      view: 145,
      message: 13,
      date: "12",
      month: "Jan",
      url: "/assets/images/blogs/5.jpg"
    },
    {
      id: 6,
      title: "Lorem ipsum dolor sit amet",
      desc: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      view: 145,
      message: 13,
      date: "12",
      month: "Jan",
      url: "/assets/images/blogs/2.jpg"
    }
  ]

}
