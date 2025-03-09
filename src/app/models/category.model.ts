export enum AccesType {
  PRIVATE = 'private',
  PUBLIC = 'public',
}

export interface Category {
  id:         number;
  name:       string;
  slug:       string;
  image:      string;
  creationAt: Date;
  updatedAt:  Date;
  access?: AccesType;
}
