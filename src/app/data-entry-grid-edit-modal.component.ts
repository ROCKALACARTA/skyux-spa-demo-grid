import {
    Component,
    OnInit
  } from '@angular/core';
  
  import {
    SkyAgGridService,
    SkyAutocompleteProperties,
    SkyCellType
  } from '@skyux/ag-grid';
  
  import {
    SkyAutocompleteSelectionChange
  } from '@skyux/lookup';
  
  import {
    SkyModalInstance
  } from '@skyux/modals';
  
  import {
    CellValueChangedEvent,
    ColDef,
    GridApi,
    GridOptions,
    GridReadyEvent,
    ICellEditorParams,
    RowNode
  } from 'ag-grid-community';
  
  import {
    SkyAgGridDemoRow,
    SKY_ADDRESS
  } from './data-entry-grid-demo-data';
  
  import {
    SkyDataEntryGridEditModalContext
  } from './data-entry-grid-edit-modal-context';
  
  @Component({
    selector: 'sky-demo-edit-modal-form',
    templateUrl: './data-entry-grid-edit-modal.component.html'
  })
  export class SkyDataEntryGridEditModalComponent implements OnInit {
    public columnDefs: ColDef[];
    public gridApi: GridApi;
    public gridData: SkyAgGridDemoRow[];
    public gridOptions: GridOptions;
  
    constructor(
      private agGridService: SkyAgGridService,
      public context: SkyDataEntryGridEditModalContext,
      public instance: SkyModalInstance
    ) { }
  
    public ngOnInit(): void {
      this.gridData = this.context.gridData;
      this.columnDefs = [
        {
          field: 'name',
          headerName: 'Name',
          editable: true
        },
        {
          field: 'lastname',
          headerName: 'Last Name',
          editable: true
        },
        {
          field: 'contactnumber',
          headerName: 'Contact Number',
          editable: true
        },
        {
          field: 'email',
          headerName: 'e-mail',
          editable: true
        },
        {
          field: 'dateofbirth',
          headerName: 'Date of birth',
          type: SkyCellType.Date,
          sort: 'asc',
          editable: true
        },
        {
          field: 'address',
          headerName: 'Address',
          type: SkyCellType.Autocomplete,
          editable: true,
          cellEditorParams: (params: ICellEditorParams): { skyComponentProperties: SkyAutocompleteProperties } => {
            return {
              skyComponentProperties: {
                data: SKY_ADDRESS,
                selectionChange: (change: SkyAutocompleteSelectionChange): void => { this.departmentSelectionChange(change, params.node); }
              }
            };
          },
          onCellValueChanged: (changeEvent: CellValueChangedEvent): void => {
            if (changeEvent.newValue !== changeEvent.oldValue) {
              this.clearJobTitle(changeEvent.node);
            }
          }
        },
      ];
  
      this.gridOptions = {
        columnDefs: this.columnDefs,
        onGridReady: gridReadyEvent => this.onGridReady(gridReadyEvent)
      };
      this.gridOptions = this.agGridService.getEditableGridOptions({ gridOptions: this.gridOptions });
    }
  
    public onGridReady(gridReadyEvent: GridReadyEvent): void {
      this.gridApi = gridReadyEvent.api;
  
      this.gridApi.sizeColumnsToFit();
    }
  
    private departmentSelectionChange(change: SkyAutocompleteSelectionChange, node: RowNode): void {
      if (change.selectedItem && change.selectedItem !== node.data.address) {
        this.clearJobTitle(node);
      }
    }
  
    private clearJobTitle(node: RowNode): void {
      node.data.jobTitle = undefined;
      this.gridApi.refreshCells({rowNodes: [node]});
    }
  }