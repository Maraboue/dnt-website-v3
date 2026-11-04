import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { EMAIL, SWAP_URL } from '../../content';
import './closing.css';

const Closing = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send('service_f3ugcj6', 'template_8z65gan', {
        from_name: email,
        to_name: 'Dynamic Network',
        message: 'Sent from the sign-up form on the website.',
        reply_to: email,
      }, 'CdBOqvJOI9zgDnoZQ');
      setEmail('');
      setStatus('sent');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="closing">
      <div className="container">
        <div className="closing__panel reveal">
          <div className="closing__copy">
            <p className="eyebrow">The future of finance is DeFi</p>
            <h2 className="heading">Do you want to step into the future before others?</h2>
            <p className="lead">Join the Dynamic Network today and start exploring the endless possibilities.</p>
          </div>

          <div className="closing__actions">
            <a className="button button--primary closing__cta" href={SWAP_URL} target="_blank" rel="noopener noreferrer">Get $DNT</a>

            <form className="signup" onSubmit={onSubmit}>
              <div className="signup__row">
                <label htmlFor="signup-email">
                  Or get started by email
                  <input
                    id="signup-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </label>
                <button type="submit" className="button button--ghost" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Get started'}
                </button>
              </div>
              <p className="signup__status" role="status">
                {status === 'sent' && 'Thank you for reaching out!'}
                {status === 'error' && (
                  <>Something went wrong. Please email us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</>
                )}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Closing;
