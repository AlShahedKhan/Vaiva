import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const Create: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string[] }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    Inertia.post('/services', { name, description }, {
      onError: (err) => setErrors(err),
    });
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Create Service</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          {errors.name && <div className="text-red-500 text-sm">{errors.name[0]}</div>}
        </div>
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          {errors.description && <div className="text-red-500 text-sm">{errors.description[0]}</div>}
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Create</button>
      </form>
    </div>
  );
};

export default Create;
