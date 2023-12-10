export interface ProductI {
    image: string,
    id: number;
    price: number;
    title: string;
  }

export interface CardI{
    image: string,
    price: number,
    id:number,
    title:string,
    cartAlert: () => void,
}
export interface details{
  image: string,
  id: number;
  price: number;
  title: string;
  category: string;
  description: string
}