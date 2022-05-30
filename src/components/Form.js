import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Form() {
  const [state, handleSubmit] = useForm("mzbookqd");
  if (state.succeeded) {
      return <p>Nous vous contacterons prochainement</p>;
  }
  return (
      
      <form onSubmit={handleSubmit} className='fomulaire-contact'>
            <input className='prenom' type="text" placeholder="Prénom" />
            <input className='nom' type="text" placeholder="Nom" />
            <input className='tel' type="tel" placeholder="N° de téléphone" />
            
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Adresse@mail.com"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder="Message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Envoyer
      </button>
      
    </form>
  );
}


export default Form;