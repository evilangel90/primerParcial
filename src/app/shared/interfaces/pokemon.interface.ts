export interface IPokemon {
    name: string;
    url: string;
    id:number;
    sprites?: {
        back_default: string,
        front_default: string,
    }
}