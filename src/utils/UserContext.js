import { createContext } from "react";

const UserContext= createContext({
    loggedInUser: "default User",
    theme:"theme"
});

export default UserContext;