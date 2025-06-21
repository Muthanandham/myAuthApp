import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
constructor(private router: Router) {}

  goTo(path: string) {
    console.log("ooo")
    this.router.navigate([`/${path}`]);
  }
}
