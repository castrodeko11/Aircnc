import React, { useState } from 'react';
import api  from '../../services/api'

export default function Login({ history }){
    const [email,setEmail] = useState('');

    async function handleSubmit(event){
      event.preventDefault();
      // console.log(email);
  
     const response = await api.post('/sessions',{email});
     // email:email -> Chave tem o mesmo nome do valor
  
     const {_id} = response.data;
     localStorage.setItem('user',_id)

     history.push('/dashboard')
  
    }

    return (
        <>
        <p> 
        Ofereça <strong>spots</strong> para os programadres e contre <strong>talentos</strong>para sua empresa
        </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email"> E-MAIL *</label>
        <input 
          type="email"
          id="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <button className="btn" type="submit">Entrar</button>
      </form> 
      </>
    )
} 