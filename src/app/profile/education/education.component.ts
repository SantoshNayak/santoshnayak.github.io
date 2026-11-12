import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  entries = [
    {
      years: '2016 – 2019',
      level: 'MCA',
      degree: 'Masters of Computer Application',
      school: 'Utkal University',
      points: [
        'Transitioned from Physics to Computer Science with distinction',
        'Won multiple Techfest and Codejam awards, showcasing technical excellence',
        'Maintained excellent academic performance throughout the program',
        'Specialized in full-stack development and emerging technologies'
      ]
    },
    {
      years: '2013 – 2016',
      level: 'Graduation',
      degree: 'Bachelor of Science - Physics Honours',
      school: 'Marshaghai Degree College',
      points: [
        'Specialized in Physics with strong foundation in Mathematics and Chemistry',
        'Excelled in classical mechanics, thermodynamics, and quantum physics',
        'Maintained first-class honors throughout the degree program',
        'Discovered passion for computer science and computational thinking'
      ]
    }
  ];
}
