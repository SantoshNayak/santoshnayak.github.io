import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit {
  config: any;
  projects = [
    {
      id: 1,
      title: "AI Pushup Count",
      desc:
        "Go to live url and acees permission to camera and start doing pushups.. The AI system will count your pushups",
      livedemo: "https://santoshnayak.github.io/AI-Pushup-count/",
      githurl: "https://github.com/santoshnayak/AI-Pushup-count",
      mediumlink: "",
      videUrl: "assets/videos/PushUps.mp4",
      imageUrl: "assets/images/pushup.jpg",
      type: "video",
      tech: "HTML,CSS,JS, Tensorflow JS",
    },

    {
      id: 2,
      title: "Bicep Curl Count",
      desc:
        "Go to live url and acees permission to camera and start doing Curls.. The AI system will count your Curls",

      livedemo: "https://santoshnayak.github.io/TF-Bicep-curl-count/",
      githurl: "https://github.com/santoshnayak/TF-Bicep-curl-count",
      mediumlink: "",
      imageUrl: "assets/images/bicep.jpg",
      videUrl: "assets/videos/curl.mp4",
      tech: "HTML,CSS,JS, Tensorflow JS",
      type: "video",
    },

    {
      id: 3,
      title: "Face detection using Tensorflow JS",
      desc: "A simple Face detection system using blazeface",
      livedemo: "https://santoshnayak.github.io/Tensorflowjs-facedetection/",
      githurl: "https://github.com/santoshnayak/Tensorflowjs-facedetection",
      mediumlink: "",
      imageUrl: "assets/images/face-detection.jpg",
      tech: "HTML,CSS,JS, Tensorflow JS,blazeface",
      type: "image",
      videUrl: "",
    },

    {
      id: 4,
      title: "Odia Month NPM Package",
      desc:
        "A simple package that returns odia month name by taking english name as input parameter",
      livedemo: "https://www.npmjs.com/package/odia-month",
      githurl: "https://github.com/santoshnayak/Odia-Month",
      mediumlink: "",
      imageUrl: "assets/images/odia-month.png",
      tech: "JavaScript",
      type: "image",
      videUrl: "",
    },

    {
      id: 5,
      title: "Cowin Slot Alert",
      desc:
        "A system that will check for available vaccine slot on your city and will alert to book once it finds one",
      livedemo: "https://santoshnayak.github.io/Cowin-Slot-Alert/",
      githurl: "https://github.com/santoshnayak/Cowin-Slot-Alert",
      mediumlink: "",
      imageUrl: "assets/images/cowin.png",
      tech: "Angular 11",
      type: "image",
      videUrl: "",
    },

    {
      id: 6,
      title: "Text Toxicity Checker",
      desc:
        "Give this script a text and it will analyse the text and will let you know the sense behind it",
      livedemo: "https://santoshnayak.github.io/Text-Toxicity-Checker/",
      githurl: "https://github.com/santoshnayak/Text-Toxicity-Checker",
      mediumlink: "",
      imageUrl: "assets/images/text-toxicity.png",
      tech: "HTML,CSS,JS, Tensorflow JS,blazeface",
      type: "image",
      videUrl: "",
    },

  ];
  constructor() {}

  ngOnInit() {
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.projects.length,
    };
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }
}
