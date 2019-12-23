import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "lib-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"]
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() type: string;
  @Output() onButtonClick: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onClick(e) {
    console.log("epy-button", e);
    this.onButtonClick.emit(e);
  }
}
