import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-data',
  imports: [FormsModule,CommonModule],
  templateUrl: './input-data.html',
  styleUrl: './input-data.scss'
})
export class InputData {
items: any[] = [];
newItem = { title: '', info: '' };
  constructor(private router: Router) {}

addItem() {
  const { title, info } = this.newItem;
  if (title.trim() && info.trim()) {
    this.items.push({ title, info });
    this.newItem = { title: '', info: '' };
  }
}

deleteItem(item: any) {
  this.items = this.items.filter(i => i !== item);
}
 goHome() {
    this.router.navigate(['/home']);
  }
}
