import React, { useState } from 'react';
import Login from './screens/Login/Login';
import Dashboard from './screens/Dashboard/Dashboard';

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        loggedIn ? <Dashboard /> : <Login handleLogin={() => setLoggedIn(true)} />
    )
}

export default App;
