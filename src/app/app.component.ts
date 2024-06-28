import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { CalculatorComponent } from './calculator/calculator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, ThemeSwitcherComponent, CalculatorComponent]
})
export class AppComponent {
  title = 'hesap_makinesi';
}
