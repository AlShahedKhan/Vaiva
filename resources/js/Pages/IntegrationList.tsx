import React from 'react';

const integrations = [
  { id: 1, name: 'Stripe', description: 'Payment gateway integration for secure transactions.' },
  { id: 2, name: 'Slack', description: 'Team communication and notifications.' },
  { id: 3, name: 'Zapier', description: 'Automate workflows by connecting your favorite apps.' },
];

const IntegrationList: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Integration List</h1>
      <div className="grid grid-cols-1 gap-4">
        {integrations.map((integration) => (
          <div key={integration.id} className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">{integration.name}</h2>
            <p className="text-gray-700 mb-2">{integration.description}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntegrationList;
