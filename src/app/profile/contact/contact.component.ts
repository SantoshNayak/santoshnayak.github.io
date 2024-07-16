import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../profile.service";
// import { SnotifyService } from 'ng-snotify';
import { environment } from "../../../environments/environment";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  model: any = {};
  constructor(private toastr: ToastrService) {}

  ngOnInit() {}
  submit() { 

    this.toastr.error('Sorry about that! Please write me at santoshnayak.dev@gmail.com', 'Something went wrong');

  }

  // snotifyConfig = environment.snotifyConfig;
  // model: any = {};

  

  // ngOnInit() {
  // }

  // contact() {
  //   this.profile.contactus(this.model).subscribe(data => {
  //     if (data.status) {
  //       this.snotify.success(data.message, 'Success', this.snotifyConfig);
  //     } else {
  //       this.snotify.warning(data.message, 'Warning', this.snotifyConfig);
  //     }
  //   }, err => {
  //     this.snotify.error('Something went wrong. Try again later.', 'Error', this.snotifyConfig);
  //   });
  // }
}
