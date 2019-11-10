import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Buss} from '../buss';
import { stringify } from 'querystring';

@Component({
  selector: 'app-autobusi',
  templateUrl: './autobusi.component.html',
  styleUrls: ['./autobusi.component.scss']
})
export class AutobusiComponent implements OnInit {

  busevi: Buss[];
  noviheroj: Buss;


  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.apiService.getHeroes()
    .subscribe(busevi => this.busevi = busevi);
  }

  add(ime: string, gradPolaska:string, vrijemePolaska:string, vrijemeDolaska:string): void {
    ime = ime.trim();
    if (!ime) { return; }
    this.apiService.addHero({ ime, gradPolaska, vrijemePolaska, vrijemeDolaska } as Buss)
      .subscribe(hero => {
        this.busevi.push(hero);
      });
  }

  delete(hero: Buss): void {
    this.busevi = this.busevi.filter(h => h !== hero);
    this.apiService.deleteHero(hero).subscribe();
  }

}
