export class Shop {
  shopItems: any;

  constructor() {
    this.shopItems = [
      {
        title: 'Curso de Yoga',
        desc: 'Elige la Evolución y la Excelencia formación con nuestros maestros/as de yoga',
        picture: '../../assets/img/yoga.jpg',
        price: 50,
      },
      {
        title: 'Clases de Meditación',
        desc: 'Trabajarás con distintas posturas de Yoga que influiran directamente sobre tus chakras ',
        picture: '../../assets/img/meditacion.jpg',
        price: 35,
      },
      {
        title: 'Curso Zumba',
        desc: 'Te permitirá adquirir las bases y la fórmula para dar una clase de Zumba',
        picture: '../../assets/img/zumba.jpg',
        price: 420,
      },
    ];
  }
}
