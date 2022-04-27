import Entity from './Entity';

type DealersType = {
  id: number;
  title: string;
  address: string;
  lat: string;
  lng: string;
};

export default class Factory {
  reconstitute(data: any) {
    const items: any = [];
    if (data.data && data.data.length > 0) {
      data.data.forEach((item: DealersType) => {
        const taskInstance = this.makeEmpty();

        taskInstance
          .setId(item.id)
          .setTitle(item.title)
          .setAddress(item.address)
          .setLatitude(item.lat)
          .setLongitude(item.lng);
        items.push(taskInstance);
      });

      return items;
    }
  }
  makeFromForm(data: any) {
    const items: any = [];
    if (data && data.length > 0) {
      data.forEach((item: DealersType) => {
        const taskInstance = this.makeEmpty();

        taskInstance
          .setId(item.id)
          .setTitle(item.title)
          .setAddress(item.address)
          .setLatitude(item.lat)
          .setLongitude(item.lng);
        items.push(taskInstance);
      });

      return items;
    }
  }
  makeEmpty() {
    return new Entity();
  }
}
