import { IAdvertisementResponseProps } from "./ads.interface";
import { IAddressRequestProps } from "./address.interface";
interface IUserProps {
  name?: string;
  username: string;
  email: string;
  cpf: string;
  cellphone: string;
  birth_date: string | Date;
  bio?: string | null;
  is_advertiser: boolean;
}

export interface IUserRequestProps extends IUserProps {
  password: string;
  address: IAddressRequestProps
}

export interface IUserResponseProps extends IUserProps {
  id: string;
  ads: IAdvertisementResponseProps[];
  created_at: Date;
  updated_at: Date;
}

interface IUserUpdateRequestPropsWithoutCPF
  extends Omit<IUserRequestProps, "cpf" | "address"> {}

export interface IUserUpdateRequestProps
  extends Partial<IUserUpdateRequestPropsWithoutCPF> {}
