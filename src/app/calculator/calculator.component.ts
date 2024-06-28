import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Key {
  value: string;
  display: string;
  type: string;
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class CalculatorComponent {
  input: string = '';
  isAdvancedView: boolean = false;

  basicKeys: Key[] = [
    { value: 'AC', display: 'AC', type: 'clear' },
    { value: '/', display: '÷', type: 'operator' },
    { value: '*', display: '×', type: 'operator' },
    { value: '-', display: '-', type: 'operator' },
    { value: '7', display: '7', type: 'number' },
    { value: '8', display: '8', type: 'number' },
    { value: '9', display: '9', type: 'number' },
    { value: '+', display: '+', type: 'operator' },
    { value: '4', display: '4', type: 'number' },
    { value: '5', display: '5', type: 'number' },
    { value: '6', display: '6', type: 'number' },
    { value: '=', display: '=', type: 'equals' },
    { value: '1', display: '1', type: 'number' },
    { value: '2', display: '2', type: 'number' },
    { value: '3', display: '3', type: 'number' },
    { value: '.', display: '.', type: 'number' },
    { value: '0', display: '0', type: 'number' },
  ];

  advancedKeys: Key[] = [
    { value: '(', display: '(', type: 'function' },
    { value: ')', display: ')', type: 'function' },
    { value: '%', display: '%', type: 'operator' },
    { value: 'AC', display: 'AC', type: 'clear' },
    { value: 'sin(', display: 'sin', type: 'function' },
    { value: 'cos(', display: 'cos', type: 'function' },
    { value: 'tan(', display: 'tan', type: 'function' },
    { value: 'log(', display: 'log', type: 'function' },
    { value: '7', display: '7', type: 'number' },
    { value: '8', display: '8', type: 'number' },
    { value: '9', display: '9', type: 'number' },
    { value: '/', display: '÷', type: 'operator' },
    { value: '4', display: '4', type: 'number' },
    { value: '5', display: '5', type: 'number' },
    { value: '6', display: '6', type: 'number' },
    { value: '*', display: '×', type: 'operator' },
    { value: '1', display: '1', type: 'number' },
    { value: '2', display: '2', type: 'number' },
    { value: '3', display: '3', type: 'number' },
    { value: '-', display: '-', type: 'operator' },
    { value: '0', display: '0', type: 'number' },
    { value: '.', display: '.', type: 'number' },
    { value: '=', display: '=', type: 'equals' },
    { value: '+', display: '+', type: 'operator' },
  ];

  append(value: string) {
    if (value === 'AC') {
      this.clear();
    } else if (value === '=') {
      this.calculate();
    } else {
      this.input += value;
    }
  }

  clear() {
    this.input = '';
  }

  calculate() {
    try {
      this.input = this.evaluateExpression(this.input);
    } catch (error) {
      this.input = 'Error';
    }
  }

  evaluateExpression(expression: string): string {
    try {
      expression = expression.replace(/sin\(/g, 'Math.sin(');
      expression = expression.replace(/cos\(/g, 'Math.cos(');
      expression = expression.replace(/tan\(/g, 'Math.tan(');
      expression = expression.replace(/log\(/g, 'Math.log10(');
      expression = expression.replace(/÷/g, '/');
      expression = expression.replace(/×/g, '*');
      expression = expression.replace(/%/g, '/100');

      const fn = new Function('return ' + expression);
      return fn().toString();
    } catch {
      return 'Error';
    }
  }

  onInputChange(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    if (/^[0-9+\-*/.()]*$/.test(input)) {
      this.input = input;
    } else {
      (event.target as HTMLInputElement).value = this.input;
    }
  }

  toggleView() {
    this.isAdvancedView = !this.isAdvancedView;
  }
}
