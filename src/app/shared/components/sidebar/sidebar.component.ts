import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  standalone: false,
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private _gifsService: GifsService) {}

  get tags(): string[] {
    return this._gifsService.tagsHistory;
  }

  searchListTag(tag: string): void {
    this._gifsService.searchTag(tag);
  }
}
