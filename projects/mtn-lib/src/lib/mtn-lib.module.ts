import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MtnCarouselComponent } from './mtn-carousel/mtn-carousel.component';
import { MtnLibComponent } from './mtn-lib.component';

@NgModule({
  declarations: [MtnLibComponent, MtnCarouselComponent],
  imports: [BrowserModule],
  exports: [MtnLibComponent, MtnCarouselComponent],
})
export class MtnLibModule {}
