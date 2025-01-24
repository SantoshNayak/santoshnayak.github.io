import { Component } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: "app-my-apps",
  templateUrl: "./my-apps.component.html",
  styleUrls: ["./my-apps.component.scss"],
})
export class MyAppsComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 5,
      },
    },
    nav: true,
  };

  appslist = [
    {
      imgUrl:
        "/assets/images/apps/odiadict.webp",
      name: "Odia to Odia Dictionary",
      usersCount: "80k+",
      appLink:'https://play.google.com/store/apps/details?id=com.odiadictionary.odiatoodiadictionary',
    },
    {
      imgUrl: "/assets/images/apps/kolbus.webp",
      name: "Kolkata Bus Route",
      usersCount: "5k+",
      appLink:'https://play.google.com/store/apps/details?id=com.kolkata.bus.route',
    },
    {
      imgUrl: "/assets/images/apps/odiawordbook.webp",
      name: "Odia WordBook",
      usersCount: "10k+",
      appLink:'https://play.google.com/store/apps/details?id=com.odia.wordbook',
    },
    {
      imgUrl: "/assets/images/apps/odiaessay.webp",
      name: "Odia Essay",
      usersCount: "5k+",
      appLink:'https://play.google.com/store/apps/details?id=com.odia.essay',
    },
    {
      imgUrl: "/assets/images/apps/kanndict.webp",
      name: "Kannada to Kannada dictionary",
      usersCount: "10k+",
      appLink:'https://play.google.com/store/apps/details?id=com.kannada.kannada_dictionary',
    },
    {
      imgUrl: "/assets/images/apps/motonews.webp",
      name: "Moto News",
      usersCount: "2k+",
      appLink:'https://play.google.com/store/apps/details?id=com.moto.news',
    },
    {
      imgUrl: "/assets/images/apps/epos.webp",
      name: "Epos",
      usersCount: "500+",
      appLink:'https://play.google.com/store/apps/details?id=com.epos',
    },
  ];
}
