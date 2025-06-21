import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-data',
  imports: [CommonModule],
  templateUrl: './display-data.html',
  styleUrl: './display-data.scss'
})
export class DisplayData {
    constructor(private router: Router) {}

 items = [
  {
    id: 1,
    title: 'Call of Duty: Modern Warfare II',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/header.jpg',
    info: 'A first-person shooter offering fast-paced combat and rich multiplayer modes.',
    expanded: false
  },
  {
    id: 2,
    title: 'Elden Ring',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg',
    info: 'An open-world action RPG developed by FromSoftware, featuring deep lore and intense combat.',
    expanded: false
  },
  {
    id: 3,
    title: 'Cyberpunk 2077',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg',
    info: 'A futuristic RPG set in Night City, filled with high-tech upgrades and a gripping storyline.',
    expanded: false
  },
  {
    id: 4,
    title: 'Red Dead Redemption 2',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg',
    info: 'An epic western adventure from Rockstar, featuring a deep story and expansive open world.',
    expanded: false
  },
  {
    id: 5,
    title: 'The Witcher 3: Wild Hunt',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg',
    info: 'Award-winning RPG with rich storytelling, detailed quests, and a living world.',
    expanded: false
  },
  {
    id: 6,
    title: 'Counter-Strike 2',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg',
    info: 'The next evolution of the legendary tactical shooter, now rebuilt on the Source 2 engine.',
    expanded: false
  }
];

  toggle(item: any) {
    this.items.forEach(i => {
      if (i !== item) i.expanded = false;
    });
    item.expanded = !item.expanded;
  }
  goHome() {
    this.router.navigate(['/home']);
  }
}
