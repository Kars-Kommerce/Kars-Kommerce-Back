export interface IAddressRequestProps {
  cep: number;
  state: string;
  city: string;
  street: string;
  complement: string;
}

export interface IAddressResponseProps {
  id: number;
  cep: number;
  state: string;
  city: string;
  street: string;
  complement: string;
  userId: string;
  created_at: Date;
  updated_at: Date;
}

export interface IAddressUpdateRequestProps
  extends Partial<IAddressRequestProps> {}
