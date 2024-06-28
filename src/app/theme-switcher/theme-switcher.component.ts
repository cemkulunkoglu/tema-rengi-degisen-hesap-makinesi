import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.css'],
  standalone: true
})
export class ThemeSwitcherComponent {

  changeTheme(theme: string) {
    document.body.className = '';
    document.body.classList.add(theme);
  }
}
