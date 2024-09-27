import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickAndMortyService } from '../rick-and-morty.service';

@Component({
  selector: 'app-character-episodes',
  templateUrl: './character-episodes.component.html',
  styleUrls: ['./character-episodes.component.css']
})
export class CharacterEpisodesComponent implements OnInit {
  characterId: number | undefined;
  character: any; // Información del personaje
  episodes: any[] = []; // Lista de episodios

  constructor(
    private route: ActivatedRoute,
    private rickAndMortyService: RickAndMortyService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    
    if (idParam) {
      this.characterId = +idParam;  // Convertir a número

      // Obtener la información del personaje
      this.rickAndMortyService.getCharacterById(this.characterId).subscribe((characterData: any) => {
        this.character = characterData;  // Guardar información del personaje
        console.log('Character Data:', characterData); // Verifica el personaje
      }, error => {
        console.error('Error al obtener el personaje:', error);
      });

      // Obtener los episodios en los que aparece el personaje
      this.rickAndMortyService.getCharacterEpisodes(this.characterId).subscribe((data: any) => {
        console.log('Episodes Data:', data); // Verifica los episodios
        this.episodes = data; // Asignar los episodios a la variable
      }, error => {
        console.error('Error al obtener los episodios:', error);
      });
    } else {
      console.error('ID del personaje no encontrado en la ruta.');
    }
  }
}