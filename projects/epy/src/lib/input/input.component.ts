import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "epy-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"]
})
export class InputComponent implements OnInit {
  @Input() field: string;
  @Input() legend: string;
  @Input() placeholder: string;
  @Input() value: any;
  @Input() type: string;
  @Output() onInputChange: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onChange() {
    this.onInputChange.emit(this.value);
    console.log("epy-input", this.value);
  }
}
