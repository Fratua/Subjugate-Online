import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Crafting = () => {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [craftingResult, setCraftingResult] = useState(null);

    useEffect(() => {
        axios.get('/api/items')
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.error('Error fetching items', error);
            });
    }, []);

    const handleItemSelect = (event) => {
        setSelectedItem(event.target.value);
    };

    const handleCraft = () => {
        axios.post('/api/craft', { item: selectedItem })
            .then(response => {
                setCraftingResult(response.data);
            })
            .catch(error => {
                console.error('Error crafting item', error);
            });
    };

    return (
        <div id="crafting-table">
            <h2>Crafting</h2>
            <select onChange={handleItemSelect}>
                <option>Select an item to craft</option>
                {items.map(item => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                ))}
            </select>
            <button onClick={handleCraft}>Craft</button>
            {craftingResult && (
                <div>
                    <h3>Crafting Result</h3>
                    <p>{craftingResult.message}</p>
                </div>
            )}
        </div>
    );
};

export default Crafting;