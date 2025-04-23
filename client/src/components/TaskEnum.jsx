// 3. Task Status Tracking

// Add task status enum
// → Define possible task statuses (e.g., TO_DO, IN_PROGRESS, COMPLETED, BLOCKED) in code as an enum.

// Create status transition logic
// → Set rules for valid status changes (e.g., can’t go from COMPLETED back to TO_DO without admin override).

// Implement status update endpoints
// → Build API endpoints to update a task’s status, ensuring they follow the transition rules and update the database accordingly.

const Task = {
    todo: <Todo />,
    inprogress: <Inprogress />,
    
    done: <Done />
};


//use this eg
import React, { Component } from 'react';
import Second from './components/second'
import First from './components/first'
 
// Creating enum object
const Enumobj = {
    first: <First />,
    second: <Second />
};
 
// Creating enum function to return
// Particular component according to state value
function Enum({ state }) {
    return <div>{Enumobj[state]}</div>;
}
 
// Call enum function inside the App component
class App extends Component {
    render() {
        return (
            <div>
                <Enum state="first"></Enum>
                <Enum state="second"></Enum>
            </div>
        );
    }
}
 
export default App;