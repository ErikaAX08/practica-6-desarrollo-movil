import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiKey = environment.apiKey;
  private baseUrl = environment.baseUrl;
  private imageUrl = environment.imageUrl;

  constructor(private http: HttpClient) {}

  getPopular(page: number = 1): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/popular?api_key=${this.apiKey}&language=es-MX&page=${page}`
    );
  }

  getNowPlaying(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}&language=es-MX`
    );
  }

  getUpcoming(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/upcoming?api_key=${this.apiKey}&language=es-MX`
    );
  }

  searchMovies(query: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/search/movie?api_key=${this.apiKey}&language=es-MX&query=${query}`
    );
  }

  getMovieDetails(id: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}&language=es-MX`
    );
  }

  getImageUrl(path: string): string {
    return this.imageUrl + path;
  }

  getMovieCredits(id: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}&language=es-MX`
    );
  }
}
