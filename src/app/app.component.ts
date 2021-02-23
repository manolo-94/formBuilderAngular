import { OnInit, Component } from "@angular/core";
declare var $: any;

const formData = [
  {
    type: "header",
    subtype: "h1",
    label: "formBuilder in Angular"
  },
  {
    type: "paragraph",
    label:
      "This is a demonstration of formBuilder running in an AngularJS project."
  }
];

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    $(document.getElementById("fb-editor")).formBuilder({ formData });
  }
}
