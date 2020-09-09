import { Component, OnInit } from '@angular/core';
import { content } from '../../helpers/constants';

interface IContent {
  title: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  public content: IContent[] = content;
  constructor() { }

  public ngOnInit(): void {
  }

}
