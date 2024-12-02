import React from 'react';
import profilecard from './components/profilecard';
function App() {
return (
<div>
<h1>React Props Example</h1>
{/* Passing props to the child component */}
<profilecard name="John" age={25} />
<profilecard name="Jane" age={30} />
</div>
);
}
export default App