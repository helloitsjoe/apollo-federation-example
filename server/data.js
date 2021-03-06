const users = [
  {
    id: 0,
    name: 'Joe',
    email: 'j@j.com',
  },
  {
    id: 1,
    name: 'Olive',
    email: 'olive@j.com',
  },
];

const products = [
  {
    id: 1,
    sku: '123',
    name: 'Chair',
    description: 'Fuzzy',
    reviewIds: [1],
  },
  {
    id: 2,
    sku: '456',
    name: 'Couch',
    description: 'Slimy',
    reviewIds: [0],
  },
];

const reviews = [
  {
    id: 0,
    authorId: 0,
    stars: 4,
    productId: 1,
    body: 'Pretty good',
  },
  {
    id: 1,
    authorId: 1,
    stars: 1,
    productId: 1,
    body: 'Arf',
  },
  {
    id: 2,
    authorId: 1,
    stars: 5,
    productId: 2,
    body: 'Arf arf',
  },
  {
    id: 3,
    authorId: 0,
    stars: 2,
    productId: 2,
    body: 'Not bad',
  },
];

module.exports = {
  users,
  reviews,
  products,
};
