export interface IBaseMapper<E, ID, OD> {
  entityToOutDto(entity: E): OD;
  inDtoToEntity(dto: ID): E;
}
