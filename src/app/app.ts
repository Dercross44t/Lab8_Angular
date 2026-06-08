import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  personas: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const headers = new HttpHeaders({'X-API-KEY': 'abc123',});

    this.http.get<any[]>('http://localhost:5002/api/persona', { headers })
      .subscribe({
        next: data => {this.personas = data;},
        error: error => {
          console.error(error);
        }
      });
  }
}
