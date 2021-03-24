import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css'],
})
export class SpecialComponent implements OnInit {
  specials = [
    {
      _id: '1',
      name: 'Auto Expo',
      description: 'lorem ipsum',
      date: '2012-04-23T18:25:43.511Z',
    },
    {
      _id: '2',
      name: 'Auto Expo',
      description: 'lorem ipsum',
      date: '2012-04-23T18:25:43.511Z',
    },
    {
      _id: '3',
      name: 'Auto Expo',
      description: 'lorem ipsum',
      date: '2012-04-23T18:25:43.511Z',
    },
    {
      _id: '4',
      name: 'Auto Expo',
      description: 'lorem ipsum',
      date: '2012-04-23T18:25:43.511Z',
    },
    {
      _id: '5',
      name: 'Auto Expo',
      description: 'lorem ipsum',
      date: '2012-04-23T18:25:43.511Z',
    },
    {
      _id: '6',
      name: 'Auto Expo',
      description: 'lorem ipsum',
      date: '2012-04-23T18:25:43.511Z',
    },
  ];
  constructor(private _event: EventService) {}

  ngOnInit(): void {
    // this._event.getSpecials().subscribe(
    //   (res) => (this.specials = res),
    //   (err) => console.log(err)
    // );
  }
}
