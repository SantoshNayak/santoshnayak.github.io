import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
// import { NgxSpinnerService } from '../../../node_modules/ngx-spinner';

declare var AOS: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, AfterViewInit {
  scrollProgress = 0;

  constructor(
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    // this.spinner.show();
    // setTimeout(() => {
    //     this.spinner.hide();
    // }, 2000);
  }

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

  ngAfterViewInit() {
    // Wait for dynamic bindings and rendering to finish, then initialize AOS
    setTimeout(() => {
      if (typeof AOS !== 'undefined') {
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: true,
          offset: 100
        });
      }
    }, 600);
  }

}
