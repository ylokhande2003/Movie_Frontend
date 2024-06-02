// import axios from 'axios';
import { createContext, useState } from 'react';
// import toast from 'react-hot-toast';

export  const UserContext = createContext({});

// eslint-disable-next-line react/prop-types
export function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    _id: '',
    name: '',
    email: '',
    token: '',
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}