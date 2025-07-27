import React from 'react';

const MarketListing: React.FC = () => {
  // Placeholder data, replace with real data as needed
  const listings = [
    { id: 1, title: 'Premium Service', price: '$100', description: 'Top-tier service for your needs.' },
    { id: 2, title: 'Basic Service', price: '$30', description: 'Affordable and reliable.' },
    { id: 3, title: 'Consultation', price: '$50', description: 'Expert advice and support.' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Market Listing</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {listings.map(listing => (
          <div key={listing.id} className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">{listing.title}</h2>
            <div className="text-blue-600 font-bold mb-2">{listing.price}</div>
            <p className="text-gray-700 mb-4">{listing.description}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketListing;
