import { Component, OnInit } from '@angular/core';

export interface target {
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  targets: target[] = [
    {
      text: 'Crear unidad entre los vecinos.',
    },
    {
      text: 'Representar a los vecinos y defender los intereses generales de los mismos.',
    },
    {
      text: 'Informar y apoyar a los vecinos en cuestiones de interés general.',
    },
    {
      text: 'Intentar que se mejoren las infraestructuras del barrio.',
    },
    {
      text: 'Exigir al Ayuntamiento la mejora de la seguridad y limpieza de las calles y aceras del barrio.',
    },
    {
      text: 'Realizar actividades culturales, infantiles, cursos, talleres..., que den vida a la zona.',
    },

  ];


  constructor(

  ) { }

  ngOnInit(): void {
  }


}
