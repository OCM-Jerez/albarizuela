import { AfterViewInit, Component } from '@angular/core';
import { Map, marker, polyline, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {

    // http://leaflet-extras.github.io/leaflet-providers/preview/
    const map = new Map('map').setView([36.6706, -6.1318], 13);

    // create a red polyline from an array of LatLng points
    const latlngs: [number, number][] = [
      [
        36.6869195,
        -6.1367656,
      ],
      [
        36.6870421,
        -6.136559,
      ],
      [
        36.6870184,
        -6.1364812,
      ],
      [
        36.6870399,
        -6.1363927,
      ],
      [
        36.6873593,
        -6.136091,
      ],
      [
        36.6876508,
        -6.1357812,
      ],
      [
        36.6878648,
        -6.1354057,
      ],
      [
        36.688031,
        -6.1348907,
      ],
      [
        36.6881205,
        -6.1346359,
      ],
      [
        36.6882121,
        -6.1343824,
      ],
      [
        36.6884552,
        -6.1338889,
      ],
      [
        36.6885692,
        -6.1336307,
      ],
      [
        36.6886009,
        -6.1335689,
      ],
      [
        36.6886165,
        -6.133511,
      ],
      [
        36.6886402,
        -6.1333886,
      ],
      [
        36.6885735,
        -6.1329809,
      ],
      [
        36.6885165,
        -6.1327462,
      ],
      [
        36.6884681,
        -6.1325116,
      ],
      [
        36.6883627,
        -6.1325357,
      ],
      [
        36.6882638,
        -6.1325572,
      ],
      [
        36.6881068,
        -6.1326162,
      ],
      [
        36.6879519,
        -6.1326457,
      ],
      [
        36.6873529,
        -6.1328053,
      ],
      [
        36.6868001,
        -6.1329689,
      ],
      [
        36.6864205,
        -6.1330882,
      ],
      [
        36.6865323,
        -6.1327771,
      ],
      [
        36.6864947,
        -6.1325531,
      ],
      [
        36.6862828,
        -6.1321763,
      ],
      [
        36.6860935,
        -6.1318544,
      ],
      [
        36.6860494,
        -6.1317324,
      ],
      [
        36.6860268,
        -6.1316371,
      ],
      [
        36.6851643,
        -6.1319885,
      ],
      [
        36.6850095,
        -6.1316599,
      ],
      [
        36.6839555,
        -6.1319308,
      ],
      [
        36.6842394,
        -6.129529,
      ],
      [
        36.6836447,
        -6.1298146,
      ],
      [
        36.6831166,
        -6.13017,
      ],
      [
        36.6831166,
        -6.13017,
      ],
      [
        36.6826728,
        -6.1303395,
      ],
      [
        36.6821221,
        -6.1306936,
      ],
      [
        36.6813649,
        -6.1312086,
      ],
      [
        36.6811068,
        -6.1304898,
      ],
      [
        36.6804959,
        -6.1308545,
      ],
      [
        36.6803668,
        -6.1305112,
      ],
      [
        36.6795107,
        -6.1310289,
      ],
      [
        36.6797764,
        -6.1314996,
      ],
      [
        36.6800162,
        -6.1319757,
      ],
      [
        36.6805131,
        -6.1330164,
      ],
      [
        36.6805217,
        -6.1331961,
      ],
      [
        36.6807454,
        -6.1341483,
      ],
      [
        36.6808766,
        -6.1346807,
      ],
      [
        36.6809681,
        -6.1352225,
      ],
      [
        36.6811821,
        -6.1359816,
      ],
      [
        36.6814295,
        -6.1367547,
      ],
      [
        36.6816069,
        -6.1371735,
      ],
      [
        36.681679,
        -6.13735,
      ],
      [
        36.6817311,
        -6.1374396,
      ],
      [
        36.681779,
        -6.137497,
      ],
      [
        36.6820689,
        -6.1371463,
      ],
      [
        36.6822267,
        -6.1369737,
      ],
      [
        36.6823164,
        -6.1368887,
      ],
      [
        36.68242,
        -6.1368211,
      ],
      [
        36.6826195,
        -6.1367681,
      ],
      [
        36.682819,
        -6.1367192,
      ],
      [
        36.6833224,
        -6.1366461,
      ],
      [
        36.6835751,
        -6.1366069,
      ],
      [
        36.6838257,
        -6.1365958,
      ],
      [
        36.6840688,
        -6.1365774,
      ],
      [
        36.6843118,
        -6.1365509,
      ],
      [
        36.6845549,
        -6.1365083,
      ],
      [
        36.6846753,
        -6.136479,
      ],
      [
        36.6847377,
        -6.1364656,
      ],
      [
        36.6848388,
        -6.1364121,
      ],
      [
        36.6848388,
        -6.1364121,
      ],
      [
        36.6848848,
        -6.1364443,
      ],
      [
        36.6849372,
        -6.1364389,
      ],
      [
        36.6849796,
        -6.1363933,
      ],
      [
        36.685227,
        -6.1363933,
      ],
      [
        36.6853679,
        -6.1364228,
      ],
      [
        36.6856518,
        -6.1367044,
      ],
      [
        36.6859196,
        -6.1370237,
      ],
      [
        36.6860288,
        -6.137151,
      ],
      [
        36.6861562,
        -6.1372395,
      ],
      [
        36.6863552,
        -6.1372335,
      ],
      [
        36.6864912,
        -6.137209,
      ],
      [
        36.6865348,
        -6.1371738,
      ],
      [
        36.6869195,
        -6.1367656,
      ]
    ]

    polyline(latlngs, { color: 'red' }).addTo(map);

    // zoom the map to the polyline
    // map.fitBounds(polyline.getBounds());


    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
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

    const HiguerasImg = "https://res.cloudinary.com/dabrencx7/image/upload/v1647554263/albarizuela/fotosRutas/Higueras_euxcxy.jpg"
    const HiguerasMarker = marker([36.68145, -6.13363]).addTo(map).bindPopup(`
  <h1>Problemas en el vial debido obras Plaza Las Angustias</h1>
  <h3>17/03/2022 Visita Jose Antonio Díaz.</h3>
  <h4>.- </h4>
  <img src="${HiguerasImg}" alt="Higueras" width="100px">`);


    const Higueras1Marker = marker([36.68190, -6.13330]).addTo(map).bindPopup(`
<h1>Dificultades para entrar y salir al quedar de una sola dirección.</h1>
<h3>17/03/2022 Visita Jose Antonio Díaz.</h3>
<h4>.- </h4>
<img src="${HiguerasImg}" alt="Higueras" width="100px">`);

    const rosarioImg = "https://res.cloudinary.com/dabrencx7/image/upload/v1647554586/albarizuela/fotosRutas/rosario_hkevrm.jpg"
    const rosarioMarker = marker([36.68685, -6.13516]).addTo(map).bindPopup(`
  <h1>Contenedores soterrados</h1>
  <h3>17/03/2022 Visita Jose Antonio Díaz.</h3>
  <h4>.- Se rellenarán.</h4>
  <img src="${rosarioImg}" alt="Rosario" width="100px">`);

    const sanAndresImg = "https://res.cloudinary.com/dabrencx7/image/upload/v1647554796/albarizuela/fotosRutas/SanAndres_xglwx1.jpg"
    const sanAndresMarker = marker([36.68703, -6.134405]).addTo(map).bindPopup(`
<h1>Contenedores soterrados</h1>
<h3>17/03/2022 Visita Jose Antonio Díaz.</h3>
<h4>.- Se rellenarán.</h4>
<img src="${sanAndresImg}" alt="San Andres" width="100px">`);

    const sanAndres1Img = "https://res.cloudinary.com/dabrencx7/image/upload/v1647555221/albarizuela/fotosRutas/SanAndres1_cxo2tc.jpg"
    const sanAndres1Marker = marker([36.68698, -6.13500]).addTo(map).bindPopup(`
<h1>Contenedores soterrados</h1>
<h3>17/03/2022 Visita Jose Antonio Díaz.</h3>
<h4>.- Se rellenarán.</h4>
<img src="${sanAndres1Img}" alt="San Andres" width="100px">`);

    const santaRosaImg = "https://res.cloudinary.com/dabrencx7/image/upload/v1647554970/albarizuela/fotosRutas/santaRosa_dmdjja.jpg"
    const sanTaRosaMarker = marker([36.68738, -6.13545]).addTo(map).bindPopup(`
<h1>Contenedores soterrados</h1>
<h3>17/03/2022 Visita Jose Antonio Díaz.</h3>
<h4>.- Se rellenarán.</h4>
<img src="${santaRosaImg}" alt="Santa Rosa" width="100px">`);

    const prietaImg = "https://res.cloudinary.com/dabrencx7/image/upload/v1647595463/albarizuela/fotosRutas/prieta_te4brq.jpg"
    const prietaMarker = marker([36.68354, -6.13318]).addTo(map).bindPopup(`
<h1>Peatonalización calle Prieta</h1>
<h3>17/03/2022 Visita Jose Antonio Díaz.</h3>
<h4>.- Se plantea posibilidad de peatonalizar esta calle
debido a los problemas de circulación con peatones.</h4>
<img src="${prietaImg}" alt="Prieta" width="100px">`);

  }
}


