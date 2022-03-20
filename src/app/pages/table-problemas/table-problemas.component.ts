import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, ColumnApi, GridApi } from 'ag-grid-community';

import localeTextESPes from '../../../app/ag-grid/localeTextESPes.json';

import dataJSON from '../../../assets/data/problemas.json';
@Component({
  selector: 'app-table-problemas',
  templateUrl: './table-problemas.component.html',
  styleUrls: ['./table-problemas.component.scss']
})
export class TableProblemasComponent implements OnInit {
  @ViewChild('agGrid') agGrid!: AgGridAngular;
  // public columnDefs: any;
  // public defaultColDef: any;
  public groupDisplayType: any;
  // public localeText: any;
  // public rowData: any[] | undefined;
  public gridApi: GridApi | undefined;;
  public gridColumnApi: ColumnApi | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  defaultColDef = {
    sortable: true,
    resizable: true,
    autoHeight: true,
    filter: true,
    width: 130,

    headerComponentParams: {
      template:
        '<div class="ag-cell-label-container" role="presentation">' +
        '  <span ref="eMenu" class="ag-header-icon ag-header-cell-menu-button" ></span>' +
        '  <div ref="eLabel" class="ag-header-cell-label" role="presentation" >' +
        '    <span ref="eSortOrder" class="ag-header-icon ag-sort-order"></span>' +
        '    <span ref="eSortAsc" class="ag-header-icon ag-sort-ascending-icon"></span>' +
        '    <span ref="eSortDesc" class="ag-header-icon ag-sort-descending-icon"></span>' +
        '    <span ref="eSortNone" class="ag-header-icon ag-sort-none-icon"></span>' +
        '    <span ref="eText" class="ag-header-cell-text" role="columnheader" style="white-space: normal;"></span>' +
        '    <span ref="eFilter" class="ag-header-icon ag-filter-icon"></span>' +
        '  </div>' +
        '</div>',
    },

  };

  columnDefs = [
    {
      headerName: 'ID',
      field: 'id',
      width: 50,
      resizable: true,
    },
    {
      headerName: 'Fecha',
      field: 'fechaInicio',
      width: 100,
      resizable: true,
    },
    {
      headerName: 'Localización',
      field: 'localizacion',
      width: 150,
      resizable: true,
    },
    {
      headerName: 'Descripción',
      field: 'descripcion',
      width: 400,
      resizable: true,
    },
    {
      headerName: 'Gestor',
      field: 'gestor',
      width: 200,
      resizable: true,
    },
    {
      headerName: 'Gestion',
      field: 'gestion',
      width: 300,
      resizable: true,
    },
    {
      headerName: 'Acuerdo',
      field: 'acuerdo',
      width: 500,
      resizable: true,
    },
    {
      headerName: 'Comentarios',
      field: 'comentarios',
      width: 500,
      resizable: true,
    },
  ];

  localeText = localeTextESPes;
  rowData = dataJSON;

}
