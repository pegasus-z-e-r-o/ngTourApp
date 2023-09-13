import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tourApp';
  
 myFunction() {
  var element = document.body;
  element.dataset['bsTheme'] = element.dataset['bsTheme'] =="light" ?  "dark" : "light";  
  }
}
