import { Component, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(private _renderer: Renderer2) {}

  ngOnInit(): void {}
  downloadResume() {
    const link = this._renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '/assets/files/');
    link.setAttribute('download', `"Naman_Gupta_Resume.pdf"`);
    link.click();
    link.remove();
  }
}
