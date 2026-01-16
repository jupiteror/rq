// import React from 'react';

import { useEffect, useState } from "react";
import type { User } from "./types/user.type.ts";
import { getUsers } from "./api/get/get-users.ts";

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const controller = new AbortController();
    getUsers()
      .then(setUsers)
      .catch(setError)
      .finally(() => setLoading(false));

    () => {
      return controller.abort();
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Erroe: {error}</div>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          {user.firstName} {user.lastName}
        </div>
      ))}
    </div>
  );
};

export default Users;
