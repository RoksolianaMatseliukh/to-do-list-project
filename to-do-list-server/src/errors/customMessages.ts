export const customMessages = {
    ENTITY_ALREADY_EXISTS: 'first list has already existed',
    ENTITY_HAS_CREATED: 'first list has created',
    ROUTE_NOT_FOUND: 'route not found',
    paramIsNotProvided: (param: string) => `${param} is not provided`,
    entityNotFound: (entity: string, id: number) => `there is no ${entity} with id: ${id}`
};