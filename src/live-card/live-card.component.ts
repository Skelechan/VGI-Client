import {Component, Input} from '@angular/core';
import {TwitchStream} from "../models/TwitchStreams";

@Component({
  selector: 'live-card',
  templateUrl: './live-card.component.html',
  styleUrls: ['./live-card.component.css']
})
export class LiveCardComponent  {
  @Input('Stream') stream: TwitchStream | undefined;
  constructor() {
    this.stream = undefined;
  }

}
