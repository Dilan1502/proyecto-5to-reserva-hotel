export interface ExtendedJwtPayload {
    rol?: string;
    [key: string]: any; // Permite otras propiedades desconocidas
  }
