import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const EmailJs = () => {
    const form = useRef();
    
  const sendEmail = (e) => {
    e.preventDefault();

        emailjs.sendForm('service_tlwe2up', 'template_q556ept', form.current, 'aG6SyJh9OaHvbcORR')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
            <form ref={form} onSubmit={sendEmail}>
                <div className='form-group'>
                   <input type='name' name='name' className='form-control' placeholder='Enter your name'/>
               </div>
               <div className='form-group'>
                   <input type='name' name='email' className='form-control' placeholder='Enter your email'/>
               </div>
               <div className='form-group'>
                   <textarea name='message' td='' cols='30' rows='10' placeholder='Write your message'>

                   </textarea>
               </div>
               <div className='form-group'>
                   <button type='submit' className='btn btn-success' value='send email'>Sumbmit</button>
               </div>
            </form>
        </div>
      </div>
    </div>
  )
}
export default EmailJs
