import { Injectable } from '@angular/core';
import { MatThemeService } from '@angular/material/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(private matThemeService: MatThemeService) {}

  setTheme(theme: string): void {
    this.matThemeService.setTheme(theme);
  }

  getTheme(): string {
    return this.matThemeService.getActiveTheme();
  }
}
