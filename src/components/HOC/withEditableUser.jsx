import React, { useState, useEffect } from "react";
import axios from "axios";

export const withEditableUser = (Component, userId) => {
    return (props) => {
        const [originalUser, setOriginalUser] = useState(null);
        const [user, setUser] = useState(null);

        useEffect(() => {
            (async () => {
                const response = await axios.get(`/users/${userId}`);
                setOriginalUser(response.data);
                setUser(response.data)
            })();
        }, []);

        const updateUser = async (updatedUser) => {
            const response = await axios.post(`/users/${userId}`, { user: updatedUser });
            setUser(response.data);
        }

        const resetUser = () => {
            setUser(originalUser);
        }

        const onSaveUSer = async () => {
            const response = await axios.post(`/users/${userId}`, { user });
            setOriginalUser(response.data);
            setUser(response.data);
        }

        return <Component {...props} user={user} updateUser={updateUser} onSaveUser={onSaveUser} resetUser={resetUser} />;
    };
};