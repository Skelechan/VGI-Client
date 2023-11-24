import {Component, Input} from '@angular/core';
import {TwitchVideo} from "../models/TwitchVideo";

@Component({
  selector: 'video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent  {
  @Input('Video') video: TwitchVideo
    | undefined;
  constructor() {
    this.video = undefined;
  }

}
