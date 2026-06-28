import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  roles = [
    'Software Engineer Master',
    'Generative AI Builder',
    'Full-Stack Developer',
    'SaaS Product Creator'
  ];
  currentRole = '';
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;

  constructor() { }

  ngOnInit() {
    this.typeEffect();
  }

  typeEffect() {
    const current = this.roles[this.roleIndex];
    if (this.isDeleting) {
      this.currentRole = current.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.currentRole = current.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let typeSpeed = 100;
    if (this.isDeleting) {
      typeSpeed /= 2; // Delete twice as fast
    }

    if (!this.isDeleting && this.charIndex === current.length) {
      typeSpeed = 2000; // Pause on complete word
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      typeSpeed = 500; // Pause before starting new word
    }

    setTimeout(() => this.typeEffect(), typeSpeed);
  }

}
