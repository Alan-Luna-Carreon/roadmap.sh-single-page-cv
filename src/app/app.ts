import { Component, signal } from '@angular/core';
import { SinglePageCv } from "./single-page-cv/single-page-cv";

@Component({
  selector: 'app-root',
  imports: [SinglePageCv],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('single-page-cv');
}
