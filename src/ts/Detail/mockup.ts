const details = {
  detail: {
// general
    roadLegal: false,
    engine: '2-stroke',
    licenseType: 'NA',
    capacity: 125,
    minRentalPeriod: 1,
    maxPower: 35,
    weight: 120,
    topSpeed: 110,
    seatHeight: 992,
    torque: 28,
    maxRiders: 1,
    acceleration: 5,

// motorcycle
    cylinderCount: 1,
    wheelSizes: '21" F, 19" R',
    boreStroke: 55,
    tires: 'Excel',
    transmission: '6 gears, MT',
    brakes: 'Brembo',
    compressionRatio: 'xxx',
    fuelCapacity: 7.5,
    suspension: 'Sanchez',
    ignitionType: 'Kickstarr',
    frame: 'Alloy',
    kickstand: false,
    wheelbase: 1597,
    lights: false,
    rakeTrail: 'wtf',
    storageSpace: false,

// mechanic
    generalState: 'Very Good',
    motoHours: 25,
    modifications: false,
    flaws: false,
    riderExperienceSuggested: 'Begginer',
    minimumDriverAge: 16,
    maintenanceRequired: 'There is a broken right handle, but it is ok to drive anyway',
    maintenanceHistory: 'New air filters and brake pads',
  },
  other: {
// protection
    helmet: true,
    gloves: true,
    boots: true,
    jacket: true,
    chestProtector: true,
    pants: true,
    knees: true,
    elbows: true,
    goggles: true,
    neckBrace: true,

// accessories
    travelBoxesBags: true,
    lock: true,
    camera: true,
    basicTools: true,
    firstAidKit: true,

// services
    parkingGarage: false,
    recommendedMechanic: false,
    transportTheMotocycle: false,
    transportToFromMotocycle: false,
    photographer: false,
    mechanicalChangesOptions: false,
    guide: false,
    coach: false,
    group: false,
    club: false,
    nearbyCircuitTrail: false,
  },

// helmet
  helmet: {
    make: 'HJC Helmets',
    model: 'RPHA MAX Evo',
    certificates: 'Pinlock',
    age: 2017,
    state: 'New',
    type: 'Full Protection',
    picture: 'url-to-helmet-picture',
  },
};

const offer = {
  ...details,
  title: 'KTM SX 125, 2012',
  type: 'motocross',
  instance: 3,
  description: 'Those wanting to race in the Junior World Championship need look no further than the 125 SX. The free-revving and lively two-stroke engine has gained even more performance for the current season.',
  images: {
    main: 'http://p.vitalmx.com/photos/users/64/photos/83572/s1600_125_SX_90Grad.jpg',
  },
  offerer: {
    id: 1,
    picture: 'https://scontent-waw1-1.cdninstagram.com/t51.2885-15/e35/15877344_344661349253204_5404343355553349632_n.jpg',
    fullname: 'Michal Mikolajczyk',
    since: '31 Dec 1986',
    location: {
      city: 'Warsaw',
      country: 'Poland',
    },
    descript: 'My name is Mike and I like to ride motocross… but I will ride any bike, really. Ask me for local tracks and instructors – my friends and I ride and race every week. Our garage is in Warsaw Powisle.',
    recommend: 9,
  },
  price: 55,
  coord: {
    type: 'Point',
    coordinates: [
      52.237684,
      21.030086,
    ],
  },
};

const offers = [
  {
    id: 1,
    url: 'ktm-sx125-2012-warsaw-poland',
    title: 'KTM SX 125, 2012',
    approx: '5 km',
    image: 'http://p.vitalmx.com/photos/users/64/photos/83572/s1600_125_SX_90Grad.jpg',
    price: 55,
    coord: {
      type: 'Point',
      coordinates: [
        52.237684,
        21.030086,
      ],
    },
  }
];

export {
  offer,
  offers,
};
