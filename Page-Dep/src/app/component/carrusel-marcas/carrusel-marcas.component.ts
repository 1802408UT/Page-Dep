import { Component, OnInit } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-carrusel-marcas',
  template: `<swiper
    [slidesPerView]="1"
    [spaceBetween]="30"
    [loop]="true"
    [pagination]="{
      clickable: true
    }"
    [navigation]="true"
    class="mySwiper"
  >
    <ng-template swiperSlide><div class="w3-container w3-center"><img src="assets/img/clients/client-1.png" alt=""></div></ng-template
    ><ng-template swiperSlide><div class="w3-container w3-center"><img src="assets/img/clients/client-2.png" alt="" ></div></ng-template
    ><ng-template swiperSlide><div class="w3-container w3-center"><img src="assets/img/clients/client-3.png" alt="" ></div></ng-template
    ><ng-template swiperSlide><div class="w3-container w3-center"><img src="assets/img/clients/client-4.png" alt="" ></div></ng-template
    ><ng-template swiperSlide><div class="w3-container w3-center"><img src="assets/img/clients/client-5.png" alt="" ></div></ng-template
    ><ng-template swiperSlide><div class="w3-container w3-center"><img src="assets/img/clients/client-6.png" alt="" ></div></ng-template
    ><ng-template swiperSlide><div class="w3-container w3-center"><img src="assets/img/clients/client-7.png" alt="" ></div></ng-template
    ><ng-template swiperSlide><div class="w3-container w3-center"><img src="assets/img/clients/client-8.png" alt="" ></div></ng-template
    >
  </swiper>`,
  styleUrls: ['./carrusel-marcas.component.css']
})
export class CarruselMarcasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
