import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then((response) => {
        setUser(response.data.results[0]);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
      {user && (
        <div className="flex h-64 justify-items-center items-center mx-2 ">
          <div className=" ">
            <img
              className="w-full h-auto"
              src={user.picture.large}
              alt="User"
            />
          </div>
          <div className="p-4">
            <h1 className="text-xl font-semibold">{`${user.name.first} ${user.name.last}`}</h1>
            <p>{user.gender}</p>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">
              {user.location.city}, {user.location.country}
            </p>
            <p>{user.phone}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
