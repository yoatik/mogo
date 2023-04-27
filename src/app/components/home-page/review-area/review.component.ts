
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { A11y, Mousewheel, SwiperOptions } from 'swiper';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})

export class ReviewComponent {
  public config: SwiperOptions = {
    modules: [A11y, Mousewheel],
    autoHeight: false,
    spaceBetween: 0,
    slidesPerView: 1,
    breakpoints: {
      1200: {
        slidesPerView: 1,
        centeredSlides: false
      },
    }
  }

}
