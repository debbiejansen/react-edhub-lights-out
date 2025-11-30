import React, {useState} from 'react';
import './App.css';

function App() {
    const [isOn, setIsOn] = useState('false');
    console.log("Light is currently: ", isOn);
    function toggleLight() {
        setIsOn(!isOn);
    }
    return (
        <main className={isOn ? "on" : "off"}>
            <section>
                <div className="dot"></div>
                <button
                    type="button"
                    className={isOn ? "on" : "off"}
                    onClick={toggleLight}
                >
                    {isOn
                        ? "Turn off"
                        : "Turn on"
                    }
                </button>
            </section>
        </main>
    );
}

export default App;
