import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  links = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'apps', label: 'Apps' },
    { id: 'talks', label: 'Talks' },
    { id: 'education', label: 'Education' }
  ];

  open = false;
  solid = false;
  active = '';

  toggle() {
    this.open = !this.open;
  }

  close() {
    this.open = false;
  }

  @HostListener('window:keydown.escape')
  onEscape() {
    this.close();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const y = window.scrollY || document.documentElement.scrollTop;
    this.solid = y > 24;

    // Scroll-spy: the last section whose top has passed the nav line.
    let current = '';
    for (const link of this.links) {
      const el = document.getElementById(link.id);
      if (el && el.getBoundingClientRect().top <= 120) {
        current = link.id;
      }
    }
    this.active = current;
  }
}
