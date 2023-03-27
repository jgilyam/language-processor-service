export interface IBaseRepository<T> {
  save(entity: T): Promise<T>;
  findAll(): Promise<T[]>;
  findById(id: string): Promise<T>;
  deleteById(id: number): Promise<T>;
}
