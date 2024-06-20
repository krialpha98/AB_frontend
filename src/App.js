import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Welcome from './components/Welcome';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            {!isLoggedIn ? (
                <>
                    <Register />
                    <Login setIsLoggedIn={setIsLoggedIn} />
                </>
            ) : (
                <Welcome />
            )}
        </div>
    );
}

export default App;