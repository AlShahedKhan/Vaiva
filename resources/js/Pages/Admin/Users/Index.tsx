import React from 'react';
import { Inertia } from '@inertiajs/inertia';

interface User {
  id: number;
  name: string;
  email: string;
  role?: string;
}

interface Props {
  users: User[];
}

const Index: React.FC<Props> = ({ users }) => {
  const handleApprove = (id: number) => {
    if (confirm('Approve this user as a freelancer?')) {
      Inertia.post(`/users/${id}/approve`);
    }
  };

  const handleReject = (id: number) => {
    if (confirm('Are you sure you want to reject (delete) this user?')) {
      Inertia.delete(`/users/${id}`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">User Management</h1>
      {users.length === 0 ? (
        <div className="text-gray-500">No users found.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">ID</th>
                <th className="px-4 py-2 border-b">Name</th>
                <th className="px-4 py-2 border-b">Email</th>
                <th className="px-4 py-2 border-b">Role</th>
                <th className="px-4 py-2 border-b text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{user.id}</td>
                  <td className="px-4 py-2 border-b">{user.name}</td>
                  <td className="px-4 py-2 border-b">{user.email}</td>
                  <td className="px-4 py-2 border-b">{user.role || 'N/A'}</td>
                  <td className="px-4 py-2 border-b text-center space-x-2">
                    <button
                      onClick={() => handleApprove(user.id)}
                      className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(user.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                    >
                      Reject
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
