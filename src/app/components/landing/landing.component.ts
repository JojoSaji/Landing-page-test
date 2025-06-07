import { Component } from '@angular/core';
import { ModelImagesComponent } from '../model-images/model-images.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ModelImagesComponent, CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  statsInfo = [
    {
      value: 6409,
      label: 'Success Story'
    },
    {
      value: 124,
      label: 'Expert Instructor'
    },
    {
      value: 54.749,
      label: 'Hours Tutored'
    },
  ]

  constructor() {

  }

}
