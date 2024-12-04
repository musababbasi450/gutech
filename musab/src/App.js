import React from 'react';
import Uinfo from './components/uinfo';
import Statistics from './components/statistics';
import Heading from './components/heading';
import Messages from './components/messages';
import './App.css';
function App() {

    const heading = "Dashboard";


const user1 = {
name: "Musab Abbasi",
email: "24g-bcs766@student.agu.edu.pk",
role: "manager",
profilepicture: "https://www.w3schools.com/howto/img_avatar.png"
};


    const user2={
        totalusers: 100,
        activeusers: 50,
        newsignups: 10,
    };

    const user3={
           message1: "welcome to Dashboard",
           message2: "welcome to Dashboard",
           message3: "welcome to Dashboard",
    }

return (
   <div>
    <div class="heading" >
         <Heading heading={heading} />
         </div>
         <div class="dashboard">
    <Uinfo user={user1} />
    <Statistics statistics={user2}  />
   
    </div>
    <div>
        <Messages message={user3} />
    </div>
    </div>
);
}
export default App;