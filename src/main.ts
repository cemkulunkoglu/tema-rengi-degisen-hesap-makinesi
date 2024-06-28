import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { CalculatorComponent } from './app/calculator/calculator.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserAnimationsModule,
      MatButtonModule,
      MatIconModule,
      MatSelectModule,
      RouterModule.forRoot([
        { path: '', component: CalculatorComponent }
      ])
    )
  ]
})
  .catch(err => console.error(err));
