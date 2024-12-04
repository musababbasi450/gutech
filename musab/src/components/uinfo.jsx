import React from "react";
import "../App.css";

function uinfo({user}){
return(
        <div class="user1">
            <img class ="user1image" src={user.profilepicture} alt="user profile" />
            <h1 class="user1name">{user.name}</h1>
            <p class="user1email">{user.email}</p>
            <p class="user1role">{user.role}</p>
        </div>


);

}
export default uinfo;