import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  NavigationStart,
  Router,
  Event as NavigationEvent,
} from '@angular/router';
import { filter, finalize } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  opened: boolean = false;
  background: string = '!bg-second-image';

  constructor(
    private _router: Router,
    private _changeDetectorRef: ChangeDetectorRef
  ) {
    this._router.events
      .pipe(finalize(() => this._changeDetectorRef.markForCheck()))
      .subscribe((event: NavigationEvent) => {
        if (event instanceof NavigationStart) {
          switch (event.url) {
            case '/portfolio/home':
              this.background = '!bg-second-image';
              break;
            case '/portfolio/about':
              this.background = '!bg-first-image grayscale mat-elevation-z8';
              break;
            case '/portfolio/skills':
              this.background = '!bg-black';
              break;
            case '/portfolio/projects':
              this.background = '!bg-third-image';
              break;
            case '/portfolio/contact':
              this.background = '!bg-second-image';

              break;
            default:
              this.background = '!bg-second-image';
              break;
          }
        }
      });
  }

  ngOnInit(): void {}
}
