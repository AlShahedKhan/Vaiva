import React from 'react';

interface Service {
  id: number;
  name: string;
  description?: string;
}

interface Props {
  services: Service[];
}

const Listing: React.FC<Props> = ({ services }) => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Available Services</h1>
      {services.length === 0 ? (
        <div className="text-gray-500">No services found.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">ID</th>
                <th className="px-4 py-2 border-b">Name</th>
                <th className="px-4 py-2 border-b">Description</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{service.id}</td>
                  <td className="px-4 py-2 border-b">{service.name}</td>
                  <td className="px-4 py-2 border-b">{service.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Listing;
