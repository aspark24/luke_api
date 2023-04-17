import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Home = () => {

    const [resource, setResource] = useState('');
    const [selectedID, setSelectedID] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/${resource}/${selectedId}')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> Search For: </label>
                <select name='resource' value={resource} onChange={e=>setResource(e.target.value)}>
                    <option type="hidden">... Select One Please</option>
                    <option value="people">People</option>
                    <option value="planet">Planet</option>
                </select>
                <label>ID: </label>
                <input type="text" name='selectedId' value={selectedId} onChange={e=>setSelectedID(e.target.value)} />
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default Home