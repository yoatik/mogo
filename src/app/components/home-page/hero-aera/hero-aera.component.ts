import { AfterViewInit, Component, OnInit } from '@angular/core';
import { A11y, Mousewheel, SwiperOptions } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);

@Component({
  selector: 'app-hero-aera',
  templateUrl: './hero-aera.component.html',
  styleUrls: ['./hero-aera.component.scss']
})
export class HeroAeraComponent {

  public config: SwiperOptions = {

    modules: [A11y, Mousewheel],
    autoHeight: true,
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    breakpoints: {
      1200: {
        slidesPerView: 1,
        centeredSlides: false
      },
    }
  }
}
