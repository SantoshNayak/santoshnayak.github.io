import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  scrollProgress = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const docElement = document.documentElement;
    const body = document.body;
    const scrollTop = docElement.scrollTop || body.scrollTop;
    const scrollHeight = docElement.scrollHeight || body.scrollHeight;
    const clientHeight = docElement.clientHeight;

    const limit = scrollHeight - clientHeight;
    this.scrollProgress = limit > 0 ? (scrollTop / limit) * 100 : 0;
  }
}
