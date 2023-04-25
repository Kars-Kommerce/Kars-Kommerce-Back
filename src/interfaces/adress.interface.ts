export interface IAdressRequestProps {
  cep: number;
  state: string;
  city: string;
  street: string;
  complement: string;
}

export interface IAdressResponseProps {
  id: number;
  cep: number;
  state: string;
  city: string;
  street: string;
  complement: string;
  authorId: string;
  created_at: Date;
  updated_at: Date;
}

export interface IAdressUpdateRequestProps
  extends Partial<IAdressRequestProps> {}
