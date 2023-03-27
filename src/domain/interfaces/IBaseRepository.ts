export interface IBaseRepository<T> {
  save(entity: T): Promise<T>;
  findAll(): Promise<T[]>;
  findById(id: number): Promise<T>;
  deleteById(id: number): Promise<T>;
}
