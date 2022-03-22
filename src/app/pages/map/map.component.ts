import { AfterViewInit, Component } from '@angular/core';
import L, { Map, marker, polyline, tileLayer, circle, Icon, control } from 'leaflet';

import { problemas, ideas } from '../../../assets/markers/problemas';
import { limitesAlbarizuela } from '../../../assets/data/limitesAlbarizuela';
import { ds02021 } from '../../../assets/data/02-021';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {

    // http://leaflet-extras.github.io/leaflet-providers/preview/
    const mapProblemas = new Map('map').setView([36.6706, -6.1318,], 13);

    const limitesAlbarizuelaArray: [number, number][] = [];
    limitesAlbarizuela.forEach(element => {
      limitesAlbarizuelaArray.push([element.lat, element.lng])
    });
    polyline(limitesAlbarizuelaArray, { color: 'blue' }).addTo(mapProblemas);

    // const ds_02_021: [number, number][] = [
    //   [
    //     36.688551,
    //     -6.133619,
    //   ],
    //   [
    //     36.688133,
    //     -6.134499,
    //   ],
    //   [
    //     36.68783,
    //     -6.135444,

    //   ],
    // ]
    // polyline(ds_02_021, { color: 'green' }).addTo(mapProblemas);

    const ds02021Array: [number, number][] = [];
    ds02021.forEach(element => {
      ds02021Array.push([element.lat, element.long])
    });
    polyline(ds02021Array, { color: 'green' }).addTo(mapProblemas);

    // const bizcocheros: [number, number][] = [
    //   [
    //     36.6869293,
    //     -6.1344843,

    //   ,],
    //   [
    //     36.6851269,
    //     -6.1350798,
    //   ,],
    //   [
    //     36.6850795,
    //     -6.1346828,
    //   ,],
    //   [
    //     36.6845719,
    //     -6.1348974,
    //   ,],
    //   [
    //     36.6839352,
    //     -6.1350637,
    //   ,],
    //   [
    //     36.6833287,
    //     -6.1352085,
    //   ,],
    //   [
    //     36.6837546,
    //     -6.1333095,
    //   ,],
    //   [
    //     36.6839051,
    //     -6.1333042,
    //   ,],
    //   [
    //     36.6841632,
    //     -6.1332505,
    //   ,],
    //   [
    //     36.6849548,
    //     -6.1329716,
    //   ,],
    //   [
    //     36.6852645,
    //     -6.1328053,
    //   ,],
    //   [
    //     36.686198,
    //     -6.1321723,
    //   ,],
    //   [
    //     36.6862497,
    //     -6.1322259,
    //   ,],
    //   [
    //     36.6863615,
    //     -6.1323976,
    //   ,],
    //   [
    //     36.6864346,
    //     -6.1325317,
    //   ,],
    //   [
    //     36.6864863,
    //     -6.1327677,
    //   ,],
    //   [
    //     36.6864518,
    //     -6.1329394,
    //   ,],
    //   [
    //     36.6864002,
    //     -6.1330628,
    //   ,],
    //   [
    //     36.686383,
    //     -6.133213,
    //   ,],
    //   [
    //     36.6864045,
    //     -6.1334007,
    //   ,],
    //   [
    //     36.686469,
    //     -6.1335026,
    //   ,],
    //   [
    //     36.6866497,
    //     -6.1336689,
    //   ,],
    //   [
    //     36.6868476,
    //     -6.1338191,
    //   ,],
    //   [
    //     36.6869035,
    //     -6.1339586,
    //   ,],
    //   [
    //     36.6869336,
    //     -6.1341303,
    //   ,],
    //   [
    //     36.6869293,
    //     -6.1344843,
    //   ]
    // ]
    // polyline(bizcocheros, { color: 'blue' }).addTo(map);

    // const contenedores: [number, number] = [36.68505, -6.13403];
    // // marker((contenedores)).addTo(map);
    // circle((contenedores), {
    //   color: 'red',
    //   fillColor: '#f03',
    //   fillOpacity: 0.5,
    //   radius: 100
    // }).addTo(map);



    // zoom the map to the polyline
    // map.fitBounds(polyline.getBounds());


    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapProblemas);

    // https://www.youtube.com/watch?v=8fwWsFgXloY&list=PLaaTcPGicjqgLAUhR_grKBGCXbyKaP7qR&index=29
    // https://github.com/pointhi/leaflet-color-markers
    const problemaIcon = new Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41,],
      iconAnchor: [12, 41,],
      popupAnchor: [1, -34,],
      shadowSize: [41, 41,],
      // shadowAnchor: [22, 94]
    });

    problemas.map((point) => {
      marker([point.lat, point.long,], {
        icon: problemaIcon
      }
      ).addTo(mapProblemas).bindPopup(point.title);
    })

    const ideaIcon = new Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41,],
      iconAnchor: [12, 41,],
      popupAnchor: [1, -34,],
      shadowSize: [41, 41,],
      // shadowAnchor: [22, 94]
    });

    ideas.map((point) => {
      marker([point.lat, point.long,], {
        icon: ideaIcon
      }
      ).addTo(mapProblemas).bindPopup(point.title);
    })


    // Control de capas
    // https://www.youtube.com/watch?v=psTsxc1045k&list=PLaaTcPGicjqgLAUhR_grKBGCXbyKaP7qR&index=58

    // const comedia = marker([36.68593, -6.13121]).addTo(map);
    var baseLayers = {
      //  "Default": bizcocheros,
      // "OpenStreetMap": osm
    };

    var overlays = {
      // "Marker": comedia,
      // "Roads": roadsLayer
    };

    // control.layers(baseLayers, overlays).addTo(map);




    // const laComediaImg = "https://res.cloudinary.com/dabrencx7/image/upload/v1647542811/albarizuela/fotosRutas/laComedia_ipj43w.jpg"
    // const laComediaMarker = marker([36.68593, -6.13121]).addTo(map).bindPopup(`
    // <h1>Acerado en La Comedia</h1>
    // <h3>17/03/2022 Visita Jose Antonio Díaz.</h3>
    // <h4>.- Se actuará de inmediato reparando acerado.</h4>
    // <img src="${laComediaImg}" alt="La Comedia" width="100px">`);

    //   const plazaQuemadaImg = "https://res.cloudinary.com/dabrencx7/image/upload/v1647544312/albarizuela/fotosRutas/plazaQuemada_ierukr.jpg"
    //   const plazaQuemadaMarker = marker([36.68519, -6.13229]).addTo(map).bindPopup(`
    // <h1>Estado soleria Plaza Quemada</h1>
    // <h3>17/03/2022 Visita Jose Antonio Díaz.</h3>
    // <h4>.- Se actuará de inmediato reparando soleria dañada y rellenando alcorque vacio.</h4>
    // <img src="${plazaQuemadaImg}" alt="Plaza Quemada" width="100px">`);

    const panaderiaBizcocherosImg = "https://res.cloudinary.com/dabrencx7/image/upload/v1647544743/albarizuela/fotosRutas/panaderiaBizcocheros_bpg2mn.jpg"
    const panaderiaBizcocherosMarker = marker([36.68488, -6.13299]).addTo(mapProblemas).bindPopup(`
  <h1>Problemas chimenea panaderia</h1>
  <h3>17/03/2022 Visita Jose Antonio Díaz.</h3>
  <h4>.- Se estudiará pedir medidas correctoras de la instalación.</h4>
  <img src="${panaderiaBizcocherosImg}" alt="panaderia" width="100px">`);
    mapProblemas.fitBounds([[panaderiaBizcocherosMarker.getLatLng().lat, panaderiaBizcocherosMarker.getLatLng().lng]]);

    const hosario14Img = "https://res.cloudinary.com/dabrencx7/image/upload/v1647545558/albarizuela/fotosRutas/Honsario14_hwuuzr.jpg"
    const hosario14Marker = marker([36.68459, -6.13242]).addTo(mapProblemas).bindPopup(`
  <h1>Casa vendida pero que continua en mal estado</h1>
  <h3>17/03/2022 Visita Jose Antonio Díaz.</h3>
  <h4>.- Se informa del estado de la fachada con peligro de desprendimiento partes de la misma.</h4>
  <img src="${hosario14Img}" alt="Honsario" width="100px">`);

    const hosario12Img = "https://res.cloudinary.com/dabrencx7/image/upload/v1647545558/albarizuela/fotosRutas/Honsario14_hwuuzr.jpg"
    const hosario12Marker = marker([36.68469, -6.13240]).addTo(mapProblemas).bindPopup(`
  <h1>Casa propiedad del Ayuntamiento en mal estado</h1>
  <h3>Antigua sede Asociación diabeticos</h3>
  <h3>17/03/2022 Visita Jose Antonio Díaz.</h3>
  <h4>.- Se solicita alguna medida para esta casa.</h4>
  <img src="${hosario14Img}" alt="Honsario" width="100px">`);

    const hosario9Img = "https://res.cloudinary.com/dabrencx7/image/upload/v1647545558/albarizuela/fotosRutas/Honsario14_hwuuzr.jpg"
    const hosario9Marker = marker([36.68410, -6.13258]).addTo(mapProblemas).bindPopup(`
  <h1>Casa abandonada okupada por persona confictiva</h1>
  <h3>17/03/2022 Visita Jose Antonio Díaz.</h3>
  <h4>.- Se solicita alguna medida para esta casa.</h4>
  <img src="${hosario14Img}" alt="Honsario" width="100px">`);

    const residenciaUniversitariaImg = "https://res.cloudinary.com/dabrencx7/image/upload/v1647546790/albarizuela/fotosRutas/residenciaUniversitaria_ritnzx.jpg"
    const residenciaUniversitariaMarker = marker([36.68439, -6.13321]).addTo(mapProblemas).bindPopup(`
  <h1>Antigua residencia universitaria</h1>
  <h3>17/03/2022 Visita Jose Antonio Díaz.</h3>
  <h4>.- Se solicita su inclusión en el Registro de Solares.</h4>
  <img src="${residenciaUniversitariaImg}" alt="residencia" width="100px">`);

    //   const caldererosImg = "https://res.cloudinary.com/dabrencx7/image/upload/v1647547099/albarizuela/fotosRutas/Caldereros_sxrbgn.jpg"
    //   const caldererosMarker = marker([36.68528, -6.13279]).addTo(mapProblemas).bindPopup(`
    // <h1>Calle Caldereros</h1>
    // <h3>Ejemplo de paso de plataforma única a acerado estrecho actual</h3>
    // <h3>17/03/2022 Visita Jose Antonio Díaz.</h3>
    // <h4>.- Se toma como ejemplo para actuaciones futuras.</h4>
    // <img src="${caldererosImg}" alt="Don Juan" width="100px">`);

    const contenedoresBizcocherosValientesImg = "https://res.cloudinary.com/dabrencx7/image/upload/v1647547740/albarizuela/fotosRutas/contenedoresBizcocherosValientes_g3kkuv.jpg"
    const contenedoresBizcocherosValientesMarker = marker([36.68505, -6.13403]).addTo(mapProblemas).bindPopup(`
  <h1>Contenedores de basura</h1>
  <h3>17/03/2022 Problemas con los vecinos.</h3>
  <h4>.- Se tratará de hablar con todos los vecinos afectados.</h4>
  <img src="${contenedoresBizcocherosValientesImg}" alt="caldereros" width="100px">`);

    const donJuanImg = "https://res.cloudinary.com/dabrencx7/image/upload/v1647547863/albarizuela/fotosRutas/donJuan_n1jzfo.jpg"
    const donJuanMarker = marker([36.68501, -6.13172]).addTo(mapProblemas).bindPopup(`
  <h1>Falta de acerados</h1>
  <h3>17/03/2022 Visita Jose Antonio Díaz.</h3>
  <h4>.- Se informa de la gran cantidad de turistas que pasan al salir de bodegas Lustau.</h4>
  <h4>.- Actuaciones a estudiar.</h4>
  <img src="${donJuanImg}" alt="donJuan" width="100px">`);

    const donJuan12Img = "https://res.cloudinary.com/dabrencx7/image/upload/v1647548250/albarizuela/fotosRutas/donJuan12_or48gq.jpg"
    const donJuan12Marker = marker([36.68445, -6.13186]).addTo(mapProblemas).bindPopup(`
  <h1>Casa abandonada y okupada</h1>
  <h3>17/03/2022 Visita Jose Antonio Díaz.</h3>
  <h4>.- Se solicita su inclusión en el Registro de Solares.</h4>
  <img src="${donJuan12Img}" alt="donJuan" width="100px">`);

    const HiguerasImg = "https://res.cloudinary.com/dabrencx7/image/upload/v1647554263/albarizuela/fotosRutas/Higueras_euxcxy.jpg"
    const HiguerasMarker = marker([36.68145, -6.13363]).addTo(mapProblemas).bindPopup(`
  <h1>Problemas en el vial debido obras Plaza Las Angustias</h1>
  <h3>17/03/2022 Visita Jose Antonio Díaz.</h3>
  <h4>.- </h4>
  <img src="${HiguerasImg}" alt="Higueras" width="100px">`);


    const Higueras1Marker = marker([36.68190, -6.13330]).addTo(mapProblemas).bindPopup(`
<h1>Dificultades para entrar y salir al quedar de una sola dirección.</h1>
<h3>17/03/2022 Visita Jose Antonio Díaz.</h3>
<h4>.- </h4>
<img src="${HiguerasImg}" alt="Higueras" width="100px">`);

    const rosarioImg = "https://res.cloudinary.com/dabrencx7/image/upload/v1647554586/albarizuela/fotosRutas/rosario_hkevrm.jpg"
    const rosarioMarker = marker([36.68685, -6.13516]).addTo(mapProblemas).bindPopup(`
  <h1>Contenedores soterrados</h1>
  <h3>17/03/2022 Visita Jose Antonio Díaz.</h3>
  <h4>.- Se rellenarán.</h4>
  <img src="${rosarioImg}" alt="Rosario" width="100px">`);

    const sanAndresImg = "https://res.cloudinary.com/dabrencx7/image/upload/v1647554796/albarizuela/fotosRutas/SanAndres_xglwx1.jpg"
    const sanAndresMarker = marker([36.68703, -6.134405]).addTo(mapProblemas).bindPopup(`
<h1>Contenedores soterrados</h1>
<h3>17/03/2022 Visita Jose Antonio Díaz.</h3>
<h4>.- Se rellenarán.</h4>
<img src="${sanAndresImg}" alt="San Andres" width="100px">`);

    const sanAndres1Img = "https://res.cloudinary.com/dabrencx7/image/upload/v1647555221/albarizuela/fotosRutas/SanAndres1_cxo2tc.jpg"
    const sanAndres1Marker = marker([36.68698, -6.13500]).addTo(mapProblemas).bindPopup(`
<h1>Contenedores soterrados</h1>
<h3>17/03/2022 Visita Jose Antonio Díaz.</h3>
<h4>.- Se rellenarán.</h4>
<img src="${sanAndres1Img}" alt="San Andres" width="100px">`);

    const santaRosaImg = "https://res.cloudinary.com/dabrencx7/image/upload/v1647554970/albarizuela/fotosRutas/santaRosa_dmdjja.jpg"
    const sanTaRosaMarker = marker([36.68738, -6.13545]).addTo(mapProblemas).bindPopup(`
<h1>Contenedores soterrados</h1>
<h3>17/03/2022 Visita Jose Antonio Díaz.</h3>
<h4>.- Se rellenarán.</h4>
<img src="${santaRosaImg}" alt="Santa Rosa" width="100px">`);

    const prietaImg = "https://res.cloudinary.com/dabrencx7/image/upload/v1647595463/albarizuela/fotosRutas/prieta_te4brq.jpg"
    const prietaMarker = marker([36.68354, -6.13318]).addTo(mapProblemas).bindPopup(`
<h1>Peatonalización calle Prieta</h1>
<h3>17/03/2022 Visita Jose Antonio Díaz.</h3>
<h4>.- Se plantea posibilidad de peatonalizar esta calle
debido a los problemas de circulación con peatones.</h4>
<img src="${prietaImg}" alt="Prieta" width="100px">`);

  }
}



