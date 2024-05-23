import React, { useState, useEffect } from "react";

interface IUserDataProps {
  userId: string;
}

interface USER {
  name: string;
  email: string;
}

const UserData: React.FC<IUserDataProps> = (props) => {
  const { userId } = props;
  const [user, setUser] = useState<USER | null>(null);
  const [seconds, setSeconds] = useState<number>(0);

  const fetchUserData = () => {
    fetch(`https://secret.url/user/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user data:", error));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      // to escape closure
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    fetchUserData();
  }, [userId]);

  return (
    <div>
      <h1>User Data Component</h1>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
      <p>Timer: {seconds} seconds</p>
    </div>
  );
};

export default UserData;
