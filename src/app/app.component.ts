import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TwitchStream} from "../models/TwitchStreams";
import {TwitchVideo} from "../models/TwitchVideo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public _streams: TwitchStream[] | undefined;
  public _vods: TwitchVideo[] | undefined;
  public _clips: TwitchVideo[] | undefined;

  constructor(private httpClient: HttpClient) {
    this._streams = undefined;
    this._vods = undefined;
    this._clips = undefined;
  }

  ngOnInit(): void {
    this.GetStreams();
    this.GetVods();
    this.GetClips();
  }

  private GetStreams() {
    this.httpClient.get<TwitchStream[]>('/api/twitch/streams').subscribe({
        next: (streams) =>  {
          this._streams = streams
        },
        complete: () => {},
        error: () => {}
      }
    );
  }

  private GetVods() {
    this.httpClient.get<TwitchVideo[]>('/api/twitch/vods?size=10').subscribe({
        next: (streams) =>  {
          this._vods = streams
        },
        complete: () => {},
        error: () => {}
      }
    );
  }

  private GetClips() {
    this.httpClient.get<TwitchVideo[]>('/api/twitch/clips?size=10').subscribe({
        next: (clips) =>  {
          this._clips = clips
        },
        complete: () => {},
        error: () => {}
      }
    );
  }
}
