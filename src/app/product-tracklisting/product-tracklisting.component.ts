import { Component, OnInit } from '@angular/core';
import { AlbumArtist } from '../albumArtist';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {
  albumInfo?: AlbumArtist;

  constructor(private _productService: ProductService) { }
  
  ngOnInit() {
    this._productService.getAlbum(1).subscribe(
      (albumInfo: AlbumArtist) => this.albumInfo = albumInfo
    );
  }

}
