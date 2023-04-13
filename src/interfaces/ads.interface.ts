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
  
  export interface IAdvertisementResponseProps {
    id: number;
    title: string;
    description: string;
    model: string;
    brand: string;
    year: number;
    fuel: number;
    fuel_type: string;
    is_active: boolean;
    price: number;
    authorId: string;
    created_at: Date;
    updated_at: Date;
  }
  

export interface IAdvertisementUpdateRequestProps
  extends Partial<IAdvertisementRequestProps>{}

