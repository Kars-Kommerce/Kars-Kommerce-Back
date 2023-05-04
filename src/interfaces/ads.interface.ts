export interface IAdvertisementRequestProps {
  title: string;
  description: string;
  model: string;
  brand: string;
  year: number;
  kilometer: number;
  fuel: number;
  fuel_type: string;
  is_active: boolean;
  price: number;
  cover_image: string;
}

export interface IAdsAuthorProps {
  id: string;
  name: string;
  bio?: string;
  is_advertiser: boolean;
}
export interface IComments {
  id: number;
  text: string;
  author: {
    id: string;
    name: string;
  }
  created_at: Date
}
export interface IAdvertisementResponseProps {
  id: number;
  author?: IAdsAuthorProps;
  title: string;
  description: string;
  model: string;
  brand: string;
  year: number;
  kilometer: number;
  fuel: number;
  fuel_type: string;
  is_active: boolean;
  price: number;
  created_at: Date;
  updated_at: Date;
  comments?: IComments[]
  cover_image: string;
  galery?: object[];
}

export interface IAdvertisementUpdateRequestProps
  extends Partial<IAdvertisementRequestProps> {}
