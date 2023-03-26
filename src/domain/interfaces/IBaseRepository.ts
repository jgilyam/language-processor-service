export interface IBaseRepository<T> {
  save(entity: T): Promise<T>;
  findAll(): Promise<T[] | null>;
  findById(id: number): Promise<T | null>;
  deleteById(id: number): Promise<T | null>;
}
