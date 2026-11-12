import { Component } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent {
  model: any = {};

  // Ring radii for the static two-source figure (SVG user units).
  rings = Array.from({ length: 16 }, (_, i) => 14 + i * 22);

  constructor(private toastr: ToastrService) {}

  submit() {
    this.toastr.error('Sorry about that! Please write me at santoshnayak.dev@gmail.com', 'Something went wrong');
  }
}
