const gallery = [ // galley image list
  require('./Image/gallery/1.png'),
  require('./Image/gallery/2.jpg'),
  require('./Image/gallery/3.jpg'),
  require('./Image/gallery/4.jpg'),
  require('./Image/gallery/5.jpg'),
];

export default {
  global: {
    googleMapAPIKey: 'AIzaSyDM7_ueFLjxqHM5y3Jyw0rxE-RcD9BH4E0',
    comment: {
      livere: {
        enable: false, // if false, not rendering livere comment component
        service: 'city',
        uid: 'MTAyMC80Mzc5MS8yMDMzMA',
      },
      facebook: {
        enable: false, // if false, not rendering facebook comment component
        appId: '',
      },
    },
  },
  title: '1st BirthDay', // recomanded English
  wedding: {
    place: {
      name: '연인의 정원 분당',
      address: '경기 성남시 분당구 서현로257번길 15 1층 연인의정원(서현동 83-4)',
      latitude: 35.223388,
      longitude: 128.680506,
    },
    at: '2024-10-12 11:30',
  },
  bridal: {
    daughter: '이지안',
    name: '이민훈',
    image: require('./Image/bridal.jpeg'),
    phone: '+821099071728',
    facebook: false, // if false, not showing facebook icon
    father: '이지안 아빠',
    mother: '',
    position: '',
  },
  groom: {
    name: '서정은',
    image: require('./Image/groom.jpeg'),
    phone: '+821065954558',
    facebook: false,
    father: '이지안 엄마',
    mother: '',
    position: '',
  },
  image: {
    header: require('./Image/header.jpg'),
    gallery: gallery.map(item => ({
      original: item,
      thumbnail: item,
    })),
  },
};
