export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(uri: string): void;
  disconnect(): void;
  isConnected(uri: string): boolean;
}

const driver: Driver = {
  database: '',
  password: '',
  port: 23,
  connect: function (uri: string): void {
    throw new Error("Function not implemented.");
  },
  disconnect: function (): void {
    throw new Error("Function not implemented.");
  },
  isConnected: function (uri: string): boolean {
    throw new Error("Function not implemented.");
  }
}

class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}
  disconnect(): void {
    throw new Error("Method not implemented.");
  }
  isConnected(uri: string): boolean {
    throw new Error("Method not implemented.");
  }
  connect(uri: string): void {
    throw new Error("Method not implemented.");
  }
}

class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}
  disconnect(): void {
    throw new Error("Method not implemented.");
  }
  isConnected(uri: string): boolean {
    throw new Error("Method not implemented.");
  }
  connect(uri: string): void {
    throw new Error("Method not implemented.");
  }
}
