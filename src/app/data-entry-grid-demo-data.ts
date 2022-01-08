export class SkyAutocompleteOption {
    public id: string;
    public name: string;
  }
  
  export const SKY_ADDRESS = [
    {
      id: '1',
      name: 'Mexico City Main Office'
    },
    {
      id: '2',
      name: 'LA Main Office'
    },
    {
      id: '3',
      name: 'Colombia Main Office'
    },
    {
      id: '4',
      name: 'Europe'
    }
  ];
  
  export class SkyAgGridDemoRow {
    public selected: boolean;
    public name: string;
    public lastname: string;
    public contactnumber: string;
    public email: string;
    public dateofbirth?: Date;
    public address?: SkyAutocompleteOption;
    public jobTitle?: SkyAutocompleteOption;
  }
  
  export const SKY_AG_GRID_DEMO_DATA = [
    {
      selected: true,
      name: 'Billy',
      lastname:'Bob',
      contactnumber:'123456789',
      email:'billy@msn.com',
      dateofbirth: new Date('12/1/1994'),
      address: SKY_ADDRESS[3]
    },
    {
      selected: false,
      name: 'Jane',
      lastname:'Deere',
      contactnumber:'123456789',
      email:'deere@msn.com',
      dateofbirth: new Date('7/15/2009'),
      address: SKY_ADDRESS[2]
    },
    {
      selected: false,
      name: 'John',
      lastname:'Doe',
      contactnumber:'123456789',
      email:'john@msn.com',
      dateofbirth: new Date('9/1/2017'),
      address: SKY_ADDRESS[1]
    },
    {
      selected: false,
      name: 'David',
      lastname:'Smith',
      contactnumber:'123456789',
      email:'david@msn.com',
      dateofbirth: new Date('1/1/2012'),
      address: SKY_ADDRESS[2]
    },
    {
      selected: true,
      name: 'Emily',
      lastname:'Johnson',
      contactnumber:'123456789',
      email:'emily@msn.com',
      dateofbirth: new Date('1/15/2014'),
      address: SKY_ADDRESS[0]
    },
    {
      selected: false,
      name: 'Nicole',
      lastname:'Davidson',
      contactnumber:'123456789',
      email:'nicole@msn.com',
      dateofbirth: new Date('11/1/2019'),
      address: SKY_ADDRESS[2]
    },
    {
      selected: false,
      name: 'Carl',
      lastname:'Roberts',
      contactnumber:'123456789',
      email:'carl@msn.com',
      dateofbirth: new Date('11/1/2019'),
      address: SKY_ADDRESS[2]
    }
  ];