import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  value = '';
  strength = '';

  onSave(e: any) {
    this.value = e.target.value;

    if (this.value.length >= 8) {
      this.checkPassword(this.value);
    }
  }

  checkPassword(password: string) {
    const arrayOfValues = password
      .split('')
      .map((value) => this.checkElement(value));

    let secondValue = '';

    this.strength = arrayOfValues.reduce((strength, current, _, array) => {
      if (current !== array[0] && strength !== 'strong') {
        if (secondValue && current !== secondValue) {
          return (strength = 'strong');
        }

        secondValue = current;
        strength = 'medium';
      }
      return strength;
    }, 'easy');
  }

  checkElement(element: string): string {
    const isLetter = /[a-zA-Z]/.test(element);
    const isDigit = /[0-9]/.test(element);

    if (isDigit) return 'digit';
    if (isLetter) return 'letter';

    return 'symbol';
  }
}
