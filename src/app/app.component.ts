import { Component } from '@angular/core';
import { Map, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'albarizuela';

  ngAfterViewInit(): void {
    // http://leaflet-extras.github.io/leaflet-providers/preview/
    const map = new Map('map').setView([36.6706, -6.1318], 13);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const laComediaImg = "https://res.cloudinary.com/dabrencx7/image/upload/v1647542811/albarizuela/fotosRutas/laComedia_ipj43w.jpg"
    const laComediaMarker = marker([36.68593, -6.13121]).addTo(map).bindPopup(`
    <h1>Acerado en La Comedia</h1>
    <h3>17/03/2022 Visita Jose Antonio Díaz.</h3>
    <h4>.- Se actuará de inmediato reparando acerado.</h4>
    <img src="${laComediaImg}" alt="La Comedia" width="100px">`);

    const plazaQuemadaImg = "https://res.cloudinary.com/dabrencx7/image/upload/v1647544312/albarizuela/fotosRutas/plazaQuemada_ierukr.jpg"
    const plazaQuemadaMarker = marker([36.68519, -6.13229]).addTo(map).bindPopup(`
  <h1>Estado soleria Plaza Quemada</h1>
  <h3>17/03/2022 Visita Jose Antonio Díaz.</h3>
  <h4>.- Se actuará de inmediato reparando soleria dañada y rellenando alcorque vacio.</h4>
  <img src="${plazaQuemadaImg}" alt="Plaza Quemada" width="100px">`);

    const panaderiaBizcocherosImg = "https://res.cloudinary.com/dabrencx7/image/upload/v1647544743/albarizuela/fotosRutas/panaderiaBizcocheros_bpg2mn.jpg"
    const panaderiaBizcocherosMarker = marker([36.68488, -6.13299]).addTo(map).bindPopup(`
  <h1>Problemas chimenea panaderia</h1>
  <h3>17/03/2022 Visita Jose Antonio Díaz.</h3>
  <h4>.- Se estudiará pedir medidas correctoras de la instalación.</h4>
  <img src="${panaderiaBizcocherosImg}" alt="panaderia" width="100px">`);
    map.fitBounds([[panaderiaBizcocherosMarker.getLatLng().lat, panaderiaBizcocherosMarker.getLatLng().lng]]);

    const hosario14Img = "https://res.cloudinary.com/dabrencx7/image/upload/v1647545558/albarizuela/fotosRutas/Honsario14_hwuuzr.jpg"
    const hosario14Marker = marker([36.68459, -6.13242]).addTo(map).bindPopup(`
  <h1>Casa vendida pero que continua en mal estado</h1>
  <h3>17/03/2022 Visita Jose Antonio Díaz.</h3>
  <h4>.- Se informa del estado de la fachada con peligro de desprendimiento partes de la misma.</h4>
  <img src="${hosario14Img}" alt="Honsario" width="100px">`);

    const hosario12Img = "https://res.cloudinary.com/dabrencx7/image/upload/v1647545558/albarizuela/fotosRutas/Honsario14_hwuuzr.jpg"
    const hosario12Marker = marker([36.68469, -6.13240]).addTo(map).bindPopup(`
  <h1>Casa propiedad del Ayuntamiento en mal estado</h1>
  <h3>Antigua sede Asociación diabeticos</h3>
  <h3>17/03/2022 Visita Jose Antonio Díaz.</h3>
  <h4>.- Se solicita alguna medida para esta casa.</h4>
  <img src="${hosario14Img}" alt="Honsario" width="100px">`);

    const hosario9Img = "https://res.cloudinary.com/dabrencx7/image/upload/v1647545558/albarizuela/fotosRutas/Honsario14_hwuuzr.jpg"
    const hosario9Marker = marker([36.68410, -6.13258]).addTo(map).bindPopup(`
  <h1>Casa abandonada okupada por persona confictiva</h1>
  <h3>17/03/2022 Visita Jose Antonio Díaz.</h3>
  <h4>.- Se solicita alguna medida para esta casa.</h4>
  <img src="${hosario14Img}" alt="Honsario" width="100px">`);

    const residenciaUniversitariaImg = "https://res.cloudinary.com/dabrencx7/image/upload/v1647546790/albarizuela/fotosRutas/residenciaUniversitaria_ritnzx.jpg"
    const residenciaUniversitariaMarker = marker([36.68439, -6.13321]).addTo(map).bindPopup(`
  <h1>Antigua residencia universitaria</h1>
  <h3>17/03/2022 Visita Jose Antonio Díaz.</h3>
  <h4>.- Se solicita su inclusión en el Registro de Solares.</h4>
  <img src="${residenciaUniversitariaImg}" alt="residencia" width="100px">`);

    const caldererosImg = "https://res.cloudinary.com/dabrencx7/image/upload/v1647547099/albarizuela/fotosRutas/Caldereros_sxrbgn.jpg"
    const caldererosMarker = marker([36.68528, -6.13279]).addTo(map).bindPopup(`
  <h1>Calle Caldereros</h1>
  <h3>Ejemplo de paso de plataforma única a acerado estrecho actual</h3>
  <h3>17/03/2022 Visita Jose Antonio Díaz.</h3>
  <h4>.- Se toma como ejemplo para actuaciones futuras.</h4>
  <img src="${caldererosImg}" alt="Don Juan" width="100px">`);

    const contenedoresBizcocherosValientesImg = "https://res.cloudinary.com/dabrencx7/image/upload/v1647547740/albarizuela/fotosRutas/contenedoresBizcocherosValientes_g3kkuv.jpg"
    const contenedoresBizcocherosValientesMarker = marker([36.68505, -6.13403]).addTo(map).bindPopup(`
  <h1>Contenedores de basura</h1>
  <h3>17/03/2022 Problemas con los vecinos.</h3>
  <h4>.- Se tratará de hablar con todos los vecinos afectados.</h4>
  <img src="${contenedoresBizcocherosValientesImg}" alt="caldereros" width="100px">`);

    const donJuanImg = "https://res.cloudinary.com/dabrencx7/image/upload/v1647547863/albarizuela/fotosRutas/donJuan_n1jzfo.jpg"
    const donJuanMarker = marker([36.68501, -6.13172]).addTo(map).bindPopup(`
  <h1>Falta de acerados</h1>
  <h3>17/03/2022 Visita Jose Antonio Díaz.</h3>
  <h4>.- Se informa de la gran cantidad de turistas que pasan al salir de bodegas Lustau.</h4>
  <h4>.- Actuaciones a estudiar.</h4>
  <img src="${donJuanImg}" alt="donJuan" width="100px">`);


    const donJuan12Img = "https://res.cloudinary.com/dabrencx7/image/upload/v1647548250/albarizuela/fotosRutas/donJuan12_or48gq.jpg"
    const donJuan12Marker = marker([36.68445, -6.13186]).addTo(map).bindPopup(`
  <h1>Casa abandonada y okupada</h1>
  <h3>17/03/2022 Visita Jose Antonio Díaz.</h3>
  <h4>.- Se solicita su inclusión en el Registro de Solares.</h4>
  <img src="${donJuan12Img}" alt="donJuan" width="100px">`);
  }


}



