import React, { createContext } from "react";

export const UserLikesProviderContext = createContext();

function UserLikesProvider({ children }) {
  const [userLikes, setUserLikes] = React.useState({});

  console.log(userLikes);
  function handleLike(id) {
    if (!userLikes.id) {
      setUserLikes({ id: true });
    }
    setUserLikes({ id: false });
  }

  return (
    <UserLikesProviderContext.Provider
      value={{
        userLikes,
        handleLike,
      }}
    >
      {children}
    </UserLikesProviderContext.Provider>
  );
}

export default UserLikesProvider;
