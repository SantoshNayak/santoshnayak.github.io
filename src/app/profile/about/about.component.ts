import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  // Years and labels are taken from the Education and Experience sections.
  path = [
    { year: '2013', label: 'BSc Physics Honours begins' },
    { year: '2016', label: 'MCA at Utkal University' },
    { year: '2020', label: 'First engineering role' },
    { year: '2026', label: 'Software Engineer Master' }
  ];
}
