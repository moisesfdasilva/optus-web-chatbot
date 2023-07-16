import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import UserContext from './userContext';

export default function UserProvider({ children }) {
  const [user, setUser] = useState({
    id: '',
    email: '',
    username: '',
  });

  const context = useMemo(() => ({
    user,
    setUser,
  }), [user, setUser]);

  return (
    <UserContext.Provider value={ context }>
      { children }
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
