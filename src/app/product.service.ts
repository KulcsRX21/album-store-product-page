import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AlbumArtist } from './albumArtist';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _albumUrl = '../assets/album.json';
  private _productsUrl = '../assets/products.json'; 

  constructor(private _http: HttpClient) { }

  getAlbum(id: number): Observable<AlbumArtist> {
    return this._http.get<AlbumArtist>(this._albumUrl).pipe(
      map((albumArtist) => albumArtist
    ));
  }

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(this._productsUrl).pipe(
      map((product) => product)
    );
  }
}
