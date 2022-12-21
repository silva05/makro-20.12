import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Giancarlo',
      email: 'giancarlosilva38@gmail.com',
      password: bcrypt.hashSync('admin123'),
      isAdmin: true,
    },
    {
      name: 'Edith',
      email: 'edith@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Agua sin gas CIELO',
      slug: 'sin-gas-cielo',
      category: 'Bebidas',
      image: '/images/aguaCielo.jpg',
      price: 11.25,
      brand: 'CIELO',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'Pack de 15 unids. x 625 ml. c/u',
      mayunit: 0,
      mayprice: 11.25,
    },
    {
      name: 'Cerveza CORONA EXTRA',
      slug: 'corona-extra',
      category: 'Bebidas',
      image: '/images/cervCorona.jpg',
      price: 11.25,
      brand: 'CORONA',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'Pack de 6 unids. x 355 ml. c/u',
      mayunit: 0,
      mayprice: 11.25,
    },
    {
      name: 'Papel Higiénico SUAVE NEGRO',
      slug: 'ph-suave',
      category: 'Higiene',
      image: '/images/phSuaveneg.jpg',
      price: 39.6,
      brand: 'SUAVE',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'Plancha de 6 pqtes. x 4 unids. c/u',
      mayunit: 3,
      mayprice: 37.8,
    },
    {
      name: 'Aceite vegetal PRIMOR',
      slug: 'aceite-primor',
      category: 'Aceites',
      image: '/images/aceitePrimor.webp',
      price: 59.9,
      brand: 'PRIMOR',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'Unid. x 5 L',
      mayunit: 3,
      mayprice: 58.75,
    },
  ],
};

export default data;
