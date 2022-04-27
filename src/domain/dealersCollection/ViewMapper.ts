import Entity from './Entity';

// ViewMapper class is responsible for converting data into view-ready data directly used in components to display the data
export default class ViewMapper {
  static map(dealers: Array<Entity>) {
    if (dealers === undefined) return [];
    return dealers.map((dealer: Entity, index: number) => {
      return {
        id: dealer.id,
        title: dealer.title,
        address: dealer.address,
        latitude: dealer.latitude,
        longitude: dealer.longitude,
      };
    });
  }
}
