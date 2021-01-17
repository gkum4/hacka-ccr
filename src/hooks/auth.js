import React, { createContext, useCallback, useState, useContext } from 'react';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@Mentora:token');
    const user = localStorage.getItem('@Mentora:user');

    if (token && user) {    
      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const signIn = useCallback(async ({ email, password }) => {
    const token = 'token';
    const user = {
      "user": {
        "id": "1234",
        "name": "test",
        "email": email,
        "password": password,
        "avatar": null,        
        "avatar_url": null
      },      
    }

    localStorage.setItem('@Mentora:token', token);
    localStorage.setItem('@Mentora:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Mentora:token');
    localStorage.removeItem('@Mentora:user');

    setData({});
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
