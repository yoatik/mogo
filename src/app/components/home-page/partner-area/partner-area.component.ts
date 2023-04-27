
import { Component } from '@angular/core';
import { A11y, Mousewheel, Navigation, Pagination, SwiperOptions } from 'swiper';


@Component({
  selector: 'app-partner-area',
  templateUrl: './partner-area.component.html',
  styleUrls: ['./partner-area.component.scss'],

})

// register();

export class PartnerAreaComponent {

  public config: SwiperOptions = {
    modules: [Navigation, Pagination, A11y, Mousewheel],
    spaceBetween: 20,
    slidesPerView: 3,
    loop: true,
    breakpoints: {
      1200: {
        slidesPerView: 6,
        centeredSlides: false
      },
      768: {
        slidesPerView: 4,
        centeredSlides: false
      },
      455: {
        slidesPerView: 3,
        centeredSlides: false
      },

      360: {
        slidesPerView: 3,
        centeredSlides: false
      }
    }
  }

}

