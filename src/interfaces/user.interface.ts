export interface IUserRequestProps {
  name?: String;
  username: String;
  email: String;
  password: String;
  cpf: String;
  cellphone: String;
  birth_date: Date;
  is_advertiser: Boolean;
}

export interface IUserResponseProps extends IUserRequestProps {
  id: String;
  created_at: Date;
  updated_at: Date;
}

export interface IUserUpdateRequestProps extends Partial<IUserRequestProps> {}
