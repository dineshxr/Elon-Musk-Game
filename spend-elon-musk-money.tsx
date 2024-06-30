import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const items = [
  { name: 'Tesla Model 3', price: 40000, image: '/api/placeholder/150/100' },
  { name: 'Tesla Cybertruck', price: 69900, image: '/api/placeholder/150/100' },
  { name: 'SpaceX Starlink Subscription', price: 99, image: '/api/placeholder/150/100' },
  { name: 'Twitter Blue Subscription', price: 8, image: '/api/placeholder/150/100' },
  { name: 'Acre on Mars', price: 300000, image: '/api/placeholder/150/100' },
  { name: 'Neuralink Brain Chip', price: 20000, image: '/api/placeholder/150/100' },
  { name: 'Tesla Powerwall', price: 8500, image: '/api/placeholder/150/100' },
  { name: 'SpaceX Falcon 9 Launch', price: 67000000, image: '/api/placeholder/150/100' },
  { name: 'SpaceX Falcon Heavy Launch', price: 97000000, image: '/api/placeholder/150/100' },
  { name: 'Boring Company Flamethrower', price: 500, image: '/api/placeholder/150/100' },
  { name: 'Solar City Solar Roof', price: 35000, image: '/api/placeholder/150/100' },
  { name: 'Hyperloop Test Track Mile', price: 60000000, image: '/api/placeholder/150/100' },
  { name: 'Tesla Semi Truck', price: 180000, image: '/api/placeholder/150/100' },
  { name: 'Private Island', price: 80000000, image: '/api/placeholder/150/100' },
  { name: 'SpaceX Starship', price: 250000000, image: '/api/placeholder/150/100' },
  { name: 'Giga Texas Factory', price: 1100000000, image: '/api/placeholder/150/100' },
  { name: 'Social Media Platform', price: 44000000000, image: '/api/placeholder/150/100' },
];

const formatMoney = (amount) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
};

const SpendElonMuskMoney = () => {
  const [money, setMoney] = useState(221400000000);
  const [cart, setCart] = useState({});

  const buyItem = (item) => {
    if (money >= item.price) {
      setMoney(money - item.price);
      setCart({ ...cart, [item.name]: (cart[item.name] || 0) + 1 });
    }
  };

  const sellItem = (item) => {
    if (cart[item.name] > 0) {
      setMoney(money + item.price);
      setCart({ ...cart, [item.name]: cart[item.name] - 1 });
    }
  };

  return (
    <div className="p-4 bg-gradient-to-r from-red-600 to-blue-600 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-8">
          <img src="/api/placeholder/100/100" alt="Elon Musk" className="rounded-full mr-4" />
          <h1 className="text-4xl font-bold text-gray-800">Spend Elon Musk's Money</h1>
        </div>
        <div className="text-3xl font-semibold mb-8 text-center bg-black text-white py-4 rounded-lg">
          Remaining: {formatMoney(money)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Card key={item.name} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
              <CardHeader>
                <CardTitle className="text-lg">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold mb-4 text-green-600">{formatMoney(item.price)}</p>
                <div className="flex justify-between items-center">
                  <Button onClick={() => sellItem(item)} disabled={!cart[item.name]} 
                          className="bg-red-500 hover:bg-red-600 text-white">
                    Sell
                  </Button>
                  <span className="text-2xl font-bold">{cart[item.name] || 0}</span>
                  <Button onClick={() => buyItem(item)} disabled={money < item.price}
                          className="bg-blue-500 hover:bg-blue-600 text-white">
                    Buy
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpendElonMuskMoney;
