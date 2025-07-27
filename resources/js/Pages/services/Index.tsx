import React from 'react';
import { PageProps, Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/inertia-react';

interface Service {
  id: number;
  name: string;
  description?: string;
}

interface Props extends PageProps {
  services: Service[];
}

const Index: React.FC<Props> = ({ services }) => {
  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this service?')) {
      Inertia.delete(`/services/${id}`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Service List</h1>
        <Link
          href="/services/create"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Create Service
        </Link>
      </div>

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
                <th className="px-4 py-2 border-b text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{service.id}</td>
                  <td className="px-4 py-2 border-b">{service.name}</td>
                  <td className="px-4 py-2 border-b">{service.description}</td>
                  <td className="px-4 py-2 border-b text-center space-x-2">
                    <Link
                      href={`/services/${service.id}/edit`}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(service.id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Index;
