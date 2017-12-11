import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  urlSpotify: string = 'https://api.spotify.com/v1/';
  token: string = 'BQB0sFUjZL0R9hE1JDbjMHCownbG6ZSOspmU2KYnIzuzmQujezZ-lqjEOm6auNnJwceGox85KZHXvQRQS-s';

  constructor(public http:HttpClient) {
    console.log("Servicio de Spotify listo!");
   }

   private getHeaders(): HttpHeaders{
     let headers = new HttpHeaders({
       'authorization': 'Bearer ' + this.token
     });

     return headers;
   }

   getTop( id: string ){
     let url = `${ this.urlSpotify }artists/${ id }/top-tracks?country=MX`;

     let headers = this.getHeaders();

     return this.http.get(url, { headers });
   }

   getArtista( id: string ){
     let url = `${ this.urlSpotify }artists/${ id }`;

     let headers = this.getHeaders();

     return this.http.get(url, { headers });
   }

   getArtistas(termino: string){
     let url = `${ this.urlSpotify }search?query=${ termino }&type=artist&offset=0&limit=20`;
     let headers = this.getHeaders();

     return this.http.get(url, { headers }).map( (resp: any) => {
       this.artistas = resp.artists.items;
       return this.artistas;
     })
   }

}
