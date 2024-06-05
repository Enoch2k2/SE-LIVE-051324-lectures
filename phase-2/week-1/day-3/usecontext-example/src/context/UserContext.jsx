import { createContext, useState } from "react";

const UserContext = createContext({})

function UserProvider({ children }) {
  const [user, setUser] = useState({ username: "Bob" })
  const [loggedIn, setLoggedIn] = useState(false)

  function updateName() {
    setUser({username: user.username === "Bob" ? "Sam" : "Bob"})
  }
  
  return <UserContext.Provider value={{ user, updateName }}>{ children }</UserContext.Provider>
}

export { UserProvider, UserContext }