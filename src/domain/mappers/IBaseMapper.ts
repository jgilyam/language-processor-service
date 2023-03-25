export interface IBaseMapper<E, D> {
  entityToDto(entity: E): D;
  dtoToEntity(dto: D): E;
}
