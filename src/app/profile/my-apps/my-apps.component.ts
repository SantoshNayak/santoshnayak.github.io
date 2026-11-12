import { Component } from "@angular/core";

@Component({
  selector: "app-my-apps",
  templateUrl: "./my-apps.component.html",
  styleUrls: ["./my-apps.component.scss"],
})
export class MyAppsComponent {
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
      usersCount: "10k+",
      appLink:'https://play.google.com/store/apps/details?id=com.kolkatabusroute&hl=en',
    },
    {
      imgUrl: "/assets/images/apps/odiawordbook.webp",
      name: "Odia WordBook",
      usersCount: "10k+",
      appLink:'https://play.google.com/store/apps/details?id=com.odiawordbook.spokenenglishinodia',
    },
    {
      imgUrl: "/assets/images/apps/odiaessay.webp",
      name: "Odia Essay",
      usersCount: "10k+",
      appLink:'https://play.google.com/store/apps/details?id=com.odialanguage.odiaessay',
    },
    {
      imgUrl: "/assets/images/apps/kanndict.webp",
      name: "Kannada to Kannada dictionary",
      usersCount: "10k+",
      appLink:'https://play.google.com/store/apps/details?id=com.Kannadadictionary.KannadatoKannadaDictionary',
    },
    {
      imgUrl: "/assets/images/apps/motonews.webp",
      name: "Moto News",
      usersCount: "2k+",
      appLink:'https://play.google.com/store/apps/details?id=com.carnews.moto.news',
    },
    {
      imgUrl: "/assets/images/apps/epos.webp",
      name: "Epos",
      usersCount: "500+",
      appLink:'https://play.google.com/store/apps/details?id=com.freeinvoice.storeease',
    },

  ];
}
