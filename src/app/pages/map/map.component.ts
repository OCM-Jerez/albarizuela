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
    const mapProblemas = new Map('map');

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

    mapProblemas.setView([36.68519, -6.13229,], 18);

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


  }
}



