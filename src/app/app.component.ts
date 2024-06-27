import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'projet_teamdoo';
  ngOnInit(): void {
      window.scrollTo({ left: 0, top: 1* window.outerHeight, behavior: 'smooth' });
  
  }
}

