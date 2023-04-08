interface IUserProps {
  name?: string;
  username: string;
  email: string;
  cpf: string;
  cellphone: string;
  birth_date: string | Date;
  bio?: string | undefined;
  is_advertiser: boolean;
}

export interface IUserRequestProps extends IUserProps {
  password: string;
}

export interface IUserResponseProps extends IUserProps {
  id: string;
  created_at: Date;
  updated_at: Date;
}

interface IUserUpdateRequestPropsWithoutCPF
  extends Omit<IUserRequestProps, "cpf"> {}

export interface IUserUpdateRequestProps
  extends Partial<IUserUpdateRequestPropsWithoutCPF> {}
