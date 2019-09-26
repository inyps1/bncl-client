import { Component, OnInit } from '@angular/core';
import {Image} from '../models/image.model';

@Component({
  selector: 'bncl-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  listImages: Image[];
  private imagePath = 'assets/images/';
  constructor() { }

  ngOnInit() {
    this.listImages = [
      {
        name: this.imagePath+'1.jpg',
        caption:'testCaption',
        captionDetails: 'test caption details'
      }
  ]
  }

}
