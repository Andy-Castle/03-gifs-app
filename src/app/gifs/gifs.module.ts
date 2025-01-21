import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home.component';
import { SearchBoxComponent } from './components/search-box/searc-box.component';

@NgModule({
  declarations: [HomePageComponent, SearchBoxComponent],
  imports: [CommonModule],
  exports: [HomePageComponent],
})
export class GifsModule {}
