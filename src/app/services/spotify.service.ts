import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  constructor(public http:HttpClient) {
    console.log("Servicio de Spotify listo!");
   }

   getArtistas(termino: string){
     let url = `https://api.spotify.com/v1/search?query=${ termino }&type=artist&offset=0&limit=20`;
     let headers = new HttpHeaders({
       'authorization':'Bearer BQAwa3UDlp3UwH2ZeKGk-29EErlsGmGjGUB4_ICSk513wwDghMMJA9Z5tOkxyQPyIowumdqy8Q1glfxEyfg'
     });

     return this.http.get(url, { headers }).map( (resp: any) => {
       this.artistas = resp.artists.items;
       return this.artistas;
     })
   }

}
