import Entity from './DealersEntity';

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
    const lastPage: number = data.lastPage;

    if (data.data.data && data.data.data.length > 0) {
      data.data.data.forEach((data: DealersType) => {
        const taskInstance = this.makeEmpty();

        taskInstance
          .setId(data.id)
          .setTitle(data.title)
          .setAddress(data.address)
          .setLatitude(data.lat)
          .setLongitude(data.lng);
        items.push(taskInstance);
      });

      return { items, lastPage };
    }
  }
  makeFromForm(data: any) {
    console.log(data);

    return data.data;
  }
  makeEmpty() {
    return new Entity();
  }
}
