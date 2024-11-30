import React from 'react'
import "./Contacts.css"

const Contacts = () => {
  return (
    <form  className='form'>
      <label htmlFor="">Votre Nom</label>
      <input type="text" />
      <br />
      <label htmlFor="">Votre Prénom</label>
      <input type="text" />
      <br />
      <label htmlFor="">Votre mot de passe</label>
      <input type="password" name="" id="" />
      <br />
      <label htmlFor="">Votre Email</label>
      <input type="email" name="" id="" />
      <br />
      <input type="submit" name='Envoyer'/>

    </form>
  )
}

export default Contacts