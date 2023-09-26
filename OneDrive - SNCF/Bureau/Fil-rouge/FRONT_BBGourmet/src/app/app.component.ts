import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'front_bbgourmet_perso';
  
  @HostListener('window:beforeunload', ['$event'])
  clearLocalStorageOnUnload(event: Event): void {
    localStorage.clear();
    
  }
}
