import React, { useState, useEffect } from "react";
import { getUser } from "../api/DeviseApi";

const AppDevise = () => {
  const [user, setUser] = useState();
  const [error, setError] = useState();

  const fetchUser = () => {
    getUser()
      .then(response => {
        setUser(response);
      })
      .catch(error => {
        setError(error);
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (error) return `${error}`;
  if (!user) return "Loading ...";
  return (
    <div>
      <p>Protected with Devise</p>
      <p>
        as user {user.id} {user.email}
      </p>
    </div>
  );
};

export default AppDevise;
