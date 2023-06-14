import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service/data-service.service';
import { CharacterResult } from 'src/app/model/character-model';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss']
})
export class CharacterPageComponent implements OnInit {

  characters: CharacterResult[] = [];


  constructor(public dataService: DataServiceService) {

    this.loadCharacters();

  }


  ngOnInit() {
    this.loadCharacters();
  }

  // CHARACTER
  loadCharacters() {
    this.dataService.getCharacter().subscribe({
      next: characters => this.characters = characters,
      error: err => console.log('Errore', err)
    })
  }

}


