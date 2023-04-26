export interface IAddressRequestProps {
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement: string;
}

export interface IAddressResponseProps {
  id: number;
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement: string;
  userId: string;
  created_at: Date;
  updated_at: Date;
}

export interface IAddressUpdateRequestProps
  extends Partial<IAddressRequestProps> {}
