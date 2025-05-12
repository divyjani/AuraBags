export const sampleProducts = [
  {
    id: '1',
    name: 'Traveler Pro Trolley',
    price: 199.99,
    MRP: 299.99, // 1.5x multiplier
    discount: ((299.99 - 199.99) / 299.99) * 100, // 33.33% discount
    category: 'Luggage'
  },
  {
    id: '2',
    name: 'Adventure Backpack',
    price: 89.99,
    MRP: 179.98, // 2x multiplier
    discount: ((179.98 - 89.99) / 179.98) * 100, // 50% discount
    category: 'Backpacks'
  },
  {
    id: '3',
    name: 'Weekend Duffle',
    price: 69.99,
    MRP: 62.99, // 0.9x multiplier
    discount: ((69.99 - 62.99) / 69.99) * 100, // 10% discount
    category: 'Duffles'
  },
  {
    id: '4',
    name: 'Urban Explorer Backpack',
    price: 129.99,
    MRP: 155.99, // 1.2x multiplier
    discount: ((155.99 - 129.99) / 155.99) * 100, // 16.67% discount
    category: 'Backpacks'
  },
  {
    id: '5',
    name: 'Premium Travel Suitcase',
    price: 299.99,
    MRP: 599.98, // 2x multiplier
    discount: ((599.98 - 299.99) / 599.98) * 100, // 50% discount
    category: 'Luggage'
  }
  // Continue adding for the remaining products...
];