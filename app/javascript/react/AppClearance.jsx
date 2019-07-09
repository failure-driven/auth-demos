import React, { useState, useEffect } from "react";
import { getUser } from "../api/ClearanceApi";

const AppClearance = () => {
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
      <p>Protected with clearance</p>
      <p>
        as user {user.id} {user.email}
      </p>
    </div>
  );
};

export default AppClearance;
