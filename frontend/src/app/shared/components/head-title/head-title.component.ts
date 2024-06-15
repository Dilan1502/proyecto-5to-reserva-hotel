import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-head-title',
  templateUrl: './head-title.component.html',
  styleUrls: ['./head-title.component.css']
})
export class HeadTitleComponent {
  @Input() title!: string;
  @Input() description!: string;
}
