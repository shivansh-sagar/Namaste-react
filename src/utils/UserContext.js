import { createContext } from "react";

const UserContext= createContext({
    loggedInUser: "default User",
    dark:"theme_dark",
    light:"theme_light",
    text:"dummy",
    card: "LessDark"
});

export default UserContext;