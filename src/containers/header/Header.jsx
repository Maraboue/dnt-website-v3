import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import people from '../../assets/people.png';
import ai from '../../assets/globe.png';
import './header.css';

function Header() {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'Dynamic Network',
    message: 'Sent from request in header section.',
    reply_to: '',
  });

  const onSubmit = (e) => {
    console.log(toSend);
    e.preventDefault();
    emailjs.send('service_f3ugcj6', 'template_8z65gan', toSend, 'CdBOqvJOI9zgDnoZQ')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      });
    document.getElementById('from_name').value = '';
    document.getElementById('from_name').placeholder = 'Thank you for your participation!';
  };

  const handleChange = (e) => {
    console.log([e.target.name], e.target.value);
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="dnt__header section__padding" id="home">
      <div className="dnt__header-content">
        <h1 className="gradient__text">The Self Regulating Cryptocurrency</h1>
        <p>A fully decentralized community where the participants governs the future.</p>

        <div className="dnt__header-content__input">
          <form className="dnt__header-content__input" onSubmit={onSubmit}>
            <input type="text" placeholder="Your Email Address" id="from_name" name="from_name" value={toSend.from_name} onChange={handleChange} />
            <button type="submit">Get Started</button>
          </form>
        </div>
        <div className="dnt__header-content__people">
          <img src={people} />
          <p>Join us in the world of Decentralized finance</p>
        </div>
      </div>

      <div className="dnt__header-image">
        <img src={ai} />
      </div>
    </div>
  );
}

export default Header;
