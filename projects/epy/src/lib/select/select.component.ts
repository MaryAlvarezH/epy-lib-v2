import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "lib-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.scss"]
})
export class SelectComponent implements OnInit {
  @Input() field: string;
  @Input() legend: string;
  @Input() placeholder: string;
  @Input() selectedValue: any;
  @Input() type: string;
  @Input() items: Array<any>;
  @Input() filter: boolean = false;
  @Output() onSelectChange: EventEmitter<any> = new EventEmitter();

  state: boolean = false;

  constructor() {}

  ngOnInit() {}

  onChange(item) {
    this.selectedValue = item;
    console.log("epy-select", this.selectedValue);
    this.onSelectChange.emit(this.selectedValue);
  }
}
