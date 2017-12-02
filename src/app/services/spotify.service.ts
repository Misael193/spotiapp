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
       'authorization':'Bearer BQC9N8kENAdLUBOvnIZfsABnllfHamBdL-y1madmK6TbhDlt9Q1O8T8_HK4AXOcVNCFApln8PWm_wLJcxjc'
     });

     return this.http.get(url, { headers }).map( (resp: any) => {
       this.artistas = resp.artists.items;
       return this.artistas;
     })
   }

}
