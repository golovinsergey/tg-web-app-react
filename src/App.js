import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { useTelegram } from './hooks/useTelegram';

import Header from './components/Header/Header';
import Form from './components/Form/Form';
import ProductList from './components/ProductList/ProductList';

function App() {
    const { onToggleButton, tg } = useTelegram();

    useEffect(() => {
        tg.ready();
    }, []);

    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route index element={<ProductList />} />
                <Route path={'form'} element={<Form />} />
            </Routes>
        </div>
    );
}

export default App;
