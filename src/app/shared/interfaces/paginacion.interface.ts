export interface IPaginacion<T> {
  count: number;
  next: string;
  previous: string;
  results:T[];
}