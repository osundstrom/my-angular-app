import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent {

}
