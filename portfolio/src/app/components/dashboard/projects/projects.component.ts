import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  count: number = 1;
  constructor(private _router: Router) {}

  ngOnInit(): void {}
  scrollTo(type: string): void {
    const fragment = this.getItem(type);
    this._router.navigate([], { fragment: fragment }).then(() => {
      const element = document.getElementById(fragment);
      if (element != undefined) element.scrollIntoView();
    });
  }
  getItem(type: string): string {
    switch (type) {
      case 'prev':
        if (this.count == 1) this.count = 4;
        else this.count -= 1;
        break;
      case 'next':
        if (this.count == 4) this.count = 1;
        else this.count += 1;
        break;
      default:
        break;
    }
    console.log(this.count);
    return `item${this.count}`;
  }
  onClick(type: string) {
    let url = '';
    switch (type) {
      case 'ari':
        url = 'https://arisimulation.com/';
        break;
      case 'onsap':
        url = 'https://onsapstaging.aridigital.com/login';
        break;
      case 'e-sim':
        url = 'https://e-sim.cloud:653/eSimData';
        break;
      case 'examination':
        url = 'https://ides3.aridigital.com/u1h3a';
        break;
    }

    window.open(url);
  }
}
