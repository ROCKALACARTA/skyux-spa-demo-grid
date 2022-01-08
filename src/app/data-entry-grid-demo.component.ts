import {
    Component,
    OnInit
  } from '@angular/core';
  
  import {
    GridApi,
    GridReadyEvent,
    GridOptions
  } from 'ag-grid-community';
  
  import {
    SkyCellType,
    SkyAgGridService
  } from '@skyux/ag-grid';
  
  import {
    SkyModalService,
    SkyModalCloseArgs
  } from '@skyux/modals';
  
  import {
    SkyDataEntryGridEditModalContext
  } from './data-entry-grid-edit-modal-context';
  
  import {
    SkyDataEntryGridEditModalComponent
  } from './data-entry-grid-edit-modal.component';
  
  import {
    SkyDataEntryGridContextMenuComponent
  } from './data-entry-grid-context-menu.component';
  
  import {
    SKY_AG_GRID_DEMO_DATA
  } from './data-entry-grid-demo-data';
  
  @Component({
    selector: 'sky-data-entry-grid-demo',
    templateUrl: './data-entry-grid-demo.component.html'
  })
  export class SkyDataEntryGridDemoComponent implements OnInit {
    public gridData = SKY_AG_GRID_DEMO_DATA;
    public columnDefs = [
      {
        field: 'selected',
        type: SkyCellType.RowSelector
      },
      {
        colId: 'context',
        headerName: '',
        maxWidth: 90,
        sortable: false,
        cellRendererFramework: SkyDataEntryGridContextMenuComponent
      },
      {
        field: 'name',
        headerName: 'Name'
      },
      {
        field: 'lastname',
        headerName: 'Last Name'
      },
      {
        field: 'contactnumber',
        headerName: 'Contact No.',
        type: SkyCellType.NumberValidator
      },
      {
        field: 'email',
        headerName: 'e-mail'
      },
      {
        field: 'dateofbirth',
        headerName: 'Date of Birth',
        type: SkyCellType.Date,
        sort: 'asc'
      },
      {
        field: 'address',
        headerName: 'Address',
        type: SkyCellType.Autocomplete
      }
    ];
  
    public gridApi: GridApi;
    public gridOptions: GridOptions;
    public searchText: string;
  
    constructor(
      private agGridService: SkyAgGridService,
      private modalService: SkyModalService
    ) { }
  
    public ngOnInit(): void {
      this.gridOptions = {
        columnDefs: this.columnDefs,
        onGridReady: gridReadyEvent => this.onGridReady(gridReadyEvent)
      };
      this.gridOptions = this.agGridService.getGridOptions({ gridOptions: this.gridOptions });
    }
  
    public onGridReady(gridReadyEvent: GridReadyEvent): void {
      this.gridApi = gridReadyEvent.api;
  
      this.gridApi.sizeColumnsToFit();
    }
  
    public openModal(): void {
      const context = new SkyDataEntryGridEditModalContext();
      context.gridData = this.gridData;
  
      const options = {
        providers: [{ provide: SkyDataEntryGridEditModalContext, useValue: context }],
        ariaDescribedBy: 'docs-edit-grid-modal-content',
        size: 'large'
      };
  
      const modalInstance = this.modalService.open(SkyDataEntryGridEditModalComponent, options);
  
      modalInstance.closed.subscribe((result: SkyModalCloseArgs) => {
        if (result.reason === 'cancel' || result.reason === 'close') {
          alert('Edits canceled!');
        } else {
          this.gridData = result.data;
          this.gridApi.refreshCells();
          alert('Saving data!');
        }
      });
    }
  
    public searchApplied(searchText: string): void {
      this.searchText = searchText;
      this.gridApi.setQuickFilter(searchText);
    }
  }