export type PlantCategory = {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  care: {
    sunlight: string;
    water: string;
    temperature: string;
    fertilization: string;
  };
}[];

export type plantData = {
  Indoor: PlantCategory;
  Succulents: PlantCategory;
  Herbs: PlantCategory;
};


const PlantsData = {
    Indoor: [
      {
        id: 1,
        name: 'Alocasia Zebrina',
        price: 39.99,
        description: 'Stunning indoor plant with unique striped stems.',
        imageUrl: '/indoor/Alocasiazebrina.jpg',
        care: {
          sunlight: 'Bright, indirect light',
          water: 'Keep soil consistently moist, but not soggy',
          temperature: 'Warm temperatures, avoid drafts',
          fertilization: 'Feed every 2-4 weeks during the growing season',
        },
      },
      {
        id: 2,
        name: 'Areca Palm',
        price: 29.99,
        description: 'Elegant indoor palm known for air-purifying qualities.',
        imageUrl: '/indoor/Areca-palm.jpg',
        care: {
          sunlight: 'Bright, indirect light',
          water: 'Keep soil consistently moist, but not soggy',
          temperature: 'Warm temperatures, avoid drafts',
          fertilization: 'Feed every 2-4 weeks during the growing season',
        },
      },
      {
        id: 3,
        name: 'Calathea Lancifolia',
        price: 24.99,
        description: 'Beautiful foliage plant with lance-shaped leaves.',
        imageUrl: '/indoor/Calathealancifolia.jpg',
        care: {
          sunlight: 'Bright, indirect light',
          water: 'Keep soil consistently moist, but not soggy',
          temperature: 'Warm temperatures, avoid drafts',
          fertilization: 'Feed every 2-4 weeks during the growing season',
        },
      },
      {
        id: 4,
        name: 'Ficus Benjamina',
        price: 34.99,
        description: 'Classic indoor tree with glossy green leaves.',
        imageUrl: '/indoor/Ficusbenjamina.jpg',
        care: {
          sunlight: 'Bright, indirect light',
          water: 'Keep soil consistently moist, but not soggy',
          temperature: 'Warm temperatures, avoid drafts',
          fertilization: 'Feed every 2-4 weeks during the growing season',
        },
      },
      {
        id: 5,
        name: 'Ficus Robusta Variegata',
        price: 31.99,
        description: 'Variegated version of the robust indoor ficus plant.',
        imageUrl: '/indoor/Ficusrobusta.jpg',
        care: {
          sunlight: 'Bright, indirect light',
          water: 'Keep soil consistently moist, but not soggy',
          temperature: 'Warm temperatures, avoid drafts',
          fertilization: 'Feed every 2-4 weeks during the growing season',
        },
      },
      {
        id: 6,
        name: 'Money Tree',
        price: 45.99,
        description: 'Believed to bring good luck and fortune.',
        imageUrl: '/indoor/moneytree.jpg',
        care: {
          sunlight: 'Bright, indirect light',
          water: 'Keep soil consistently moist, but not soggy',
          temperature: 'Warm temperatures, avoid drafts',
          fertilization: 'Feed every 2-4 weeks during the growing season',
        },
      },
      {
        id: 7,
        name: 'Monstera Deliciosa',
        price: 29.99,
        description: 'Popular indoor plant with distinct split leaves.',
        imageUrl: '/indoor/Monstera.jpg',
        care: {
          sunlight: 'Bright, indirect light',
          water: 'Keep soil consistently moist, but not soggy',
          temperature: 'Warm temperatures, avoid drafts',
          fertilization: 'Feed every 2-4 weeks during the growing season',
        },
      },
      {
        id: 8,
        name: 'Philodendron',
        price: 19.99,
        description: 'Easy-to-care-for indoor plant with heart-shaped leaves.',
        imageUrl: '/indoor/philodendron.jpg',
        care: {
          sunlight: 'Bright, indirect light',
          water: 'Keep soil consistently moist, but not soggy',
          temperature: 'Warm temperatures, avoid drafts',
          fertilization: 'Feed every 2-4 weeks during the growing season',
        },
      },
      {
        id: 9,
        name: 'Pilea',
        price: 16.99,
        description: 'Adorable indoor plant also known as the "Chinese Money Plant".',
        imageUrl: '/indoor/pilea.jpg',
        care: {
          sunlight: 'Bright, indirect light',
          water: 'Keep soil consistently moist, but not soggy',
          temperature: 'Warm temperatures, avoid drafts',
          fertilization: 'Feed every 2-4 weeks during the growing season',
        },
      },
    ],
    Succulents: [
      {
        id: 10,
        name: 'Aloe Brevifolia',
        price: 19.99,
        description: 'Beautiful succulent with distinctive green leaves.',
        imageUrl: '/succelents/aloebrevifolia.jpg',
        care: {
          sunlight: 'Bright, indirect light',
          water: 'Allow soil to dry out between waterings',
          temperature: 'Thrives in warm conditions',
          fertilization: 'Feed with diluted succulent fertilizer every 4-6 weeks',
        },
      },
      {
        id: 11,
        name: 'Aloe Vera',
        price: 14.99,
        description: 'Well-known succulent with various medicinal uses.',
        imageUrl: '/succelents/AloeVera.jpg',
        care: {
          sunlight: 'Bright, indirect light',
          water: 'Allow soil to dry out between waterings',
          temperature: 'Thrives in warm conditions',
          fertilization: 'Feed with diluted succulent fertilizer every 4-6 weeks',
        },
      },
      {
        id: 12,
        name: 'Cacti',
        price: 12.99,
        description: 'Assortment of unique cactus plants.',
        imageUrl: '/succelents/cacti.jpg',
        care: {
          sunlight: 'Bright, indirect light',
          water: 'Allow soil to dry out between waterings',
          temperature: 'Thrives in warm conditions',
          fertilization: 'Feed with diluted succulent fertilizer every 4-6 weeks',
        },
      },
      {
        id: 13,
        name: 'Dori',
        price: 9.99,
        description: 'Small and charming succulent plant.',
        imageUrl: '/succelents/Dori.jpg',
        care: {
          sunlight: 'Bright, indirect light',
          water: 'Allow soil to dry out between waterings',
          temperature: 'Thrives in warm conditions',
          fertilization: 'Feed with diluted succulent fertilizer every 4-6 weeks',
        },
      },
      {
        id: 14,
        name: 'Flower Succulent',
        price: 17.99,
        description: 'Succulent with vibrant flowers in various colors.',
        imageUrl: '/succelents/flower.jpg',
        care: {
          sunlight: 'Bright, indirect light',
          water: 'Allow soil to dry out between waterings',
          temperature: 'Thrives in warm conditions',
          fertilization: 'Feed with diluted succulent fertilizer every 4-6 weeks',
        },
      },
      {
        id: 15,
        name: 'Zebra Haworthia',
        price: 22.99,
        description: 'Striking succulent with zebra-like patterns on its leaves.',
        imageUrl: '/succelents/ZebraHaworthia.jpg',
        care: {
          sunlight: 'Bright, indirect light',
          water: 'Allow soil to dry out between waterings',
          temperature: 'Thrives in warm conditions',
          fertilization: 'Feed with diluted succulent fertilizer every 4-6 weeks',
        },
      },
    ],
    Herbs: [
      {
        id: 16,
        name: 'Basil',
        price: 4.99,
        description: 'Aromatic herb commonly used in cooking.',
        imageUrl: '/Herbs/basil.jpg',
        care: {
          sunlight: 'Full sun to partial shade',
          water: 'Keep soil consistently moist',
          temperature: 'Prefers warm temperatures',
          fertilization: 'Feed with a balanced liquid fertilizer every 2-3 weeks',
        },
      },
      {
        id: 17,
        name: 'Coriander',
        price: 3.99,
        description: 'Fresh herb often used in culinary dishes.',
        imageUrl: '/Herbs/Coriander.jpg',
        care: {
          sunlight: 'Full sun to partial shade',
          water: 'Keep soil consistently moist',
          temperature: 'Prefers warm temperatures',
          fertilization: 'Feed with a balanced liquid fertilizer every 2-3 weeks',
        },},
      {
        id: 18,
        name: 'Mint',
        price: 3.99,
        description: 'Refreshing herb with various culinary uses.',
        imageUrl: '/Herbs/mint.jpg',
        care: {
          sunlight: 'Full sun to partial shade',
          water: 'Keep soil consistently moist',
          temperature: 'Prefers warm temperatures',
          fertilization: 'Feed with a balanced liquid fertilizer every 2-3 weeks',
        },
      },
      
    ],
  };

 
 export default PlantsData;


  