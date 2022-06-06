import { useState } from 'react';
import './App.css';
import Dot from "./Dot";

function App() {
    const [selected, setSelected] = useState(null);
    const onSelect = (id) => {
    setSelected(id);
}
    return (
        <div className="dots-wrapper">
            {new Array(20).fill('#000000').map((_, i) => (
                <Dot key={i} selected={i === selected} onSelect={onSelect} k={i}/>
            ))}
        </div>
    );
}

export default App;
