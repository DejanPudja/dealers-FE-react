import Entity from './DealersEntity';

export default class ViewMapper {
  static map(dealers: Array<Entity>) {
    if (dealers === undefined) return [];
    return dealers.map((dealer: Entity) => {
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
