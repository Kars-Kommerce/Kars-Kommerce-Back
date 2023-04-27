export interface IAdvertisementRequestProps {
  title: string;
  description: string;
  model: string;
  brand: string;
  year: number;
  fuel: number;
  fuel_type: string;
  is_active: boolean;
  price: number;
}

export interface IAdsAuthorProps {
  id: string;
  name: string;
  bio?: string;
  is_advertiser: boolean;
}

export interface IAdvertisementResponseProps {
  id: number;
  author?: IAdsAuthorProps;
  title: string;
  description: string;
  model: string;
  brand: string;
  year: number;
  fuel: number;
  fuel_type: string;
  is_active: boolean;
  price: number;
  created_at: Date;
  updated_at: Date;
}

export interface IAdvertisementUpdateRequestProps
  extends Partial<IAdvertisementRequestProps> {}
