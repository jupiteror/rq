// import React from 'react';
import {instance} from "./instance.ts";
import {useEffect, useState} from "react";
import type {IUsersResponse, User} from "./user.type.ts";



export async function getUsers(): Promise<User[]> {
    try {
        const response = await instance.get<IUsersResponse>("/users");
        return response.data?.users;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


const Users = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [error,setError] = useState<string | null>(null);

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getUsers().then(setUsers).catch(setError).finally(() => setLoading(false));
    }, []);

    if(loading){
        return <div>Loading...</div>
    }

    if(error){
        return <div>Erroe: {error}</div>
    }

    return (
        <div>
            {users.map(user => (
                <div key={user.id}>
                    {user.firstName} {user.lastName}
                </div>
            ))}
        </div>
    );
};

export default Users;