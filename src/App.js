import './App.css';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        tg.ready();
    }, []);

    return (
        <div className='App'>
            Work
            <button onClick={onClose}>Закрыть</button>
        </div>
    );
}

export default App;
