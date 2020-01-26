import React, { useState, useMemo } from 'react';
import api from '../../services/api';

import './styles.css'

import camera from '../../assets/camera.svg';

export default function New({history}){
    const [thumbnail, setThumbnail] = useState(null);
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');

    const preview = useMemo (() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null
    },[thumbnail])

    async function handleSubmit(event){
        event.preventDeault();
        const data = new FormData();
        const user_id = localStorage.getItem('user');

        data.append('thumbnail', thumbnail);
        data.append('company', company);
        data.append('techs', techs);
        data.append('price', price);

        await api.post('/spot',data,{
            headers: { user_id }
        })

        history.push('/dashboard');

    }

    return (

        <form onSubmit={handleSubmit}>
            <label id="thumbnail"
             style={{backgroundImage:`url(${preview})`}}
             className={thumbnail ? 'has-thumbnail' : ''}
             >
                <input type="file" onChange={event => setThumbnail(event.target.files[0])}/>
                <img src={camera} alt="Selecionar img"/>
            </label>
            <label htmlFor="company">Empresa *</label>
            <input
                id="company"
                placeholder="Sua empresa incrível"
                value={company}
                onChange={event => setCompany(event.target.value)}
            />

            <label htmlFor="techs">Tecnologias * <span>(separadas por vírgula)</span></label>
            <input
                id="techs"
                placeholder="Quais tecnologias usam?"
                value={techs}
                onChange={event => setTechs(event.target.value)}
            />

            <label htmlFor="price">Valor da diária * <span>(em branco para GRATUITO)</span></label>
            <input
                id="price"
                placeholder="valor cobrado por dia"
                value={price}
                onChange={event => setPrice(event.target.value)}
            />
            <button type="submit" className="btn">Cadastrar </button>
        </form>
    )
} 