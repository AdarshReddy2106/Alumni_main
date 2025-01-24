import React, { useState } from 'react';
import './ReachUs.css';

const ReachUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const scriptURL = 'https://script.google.com/macros/s/AKfycbxdM_XiIfI9gyJIF5OarBL4tU-qmM0KUigP-AWSlrNFpV3shFK8dYPurpHAeemSKrw/exec';
        const form = new FormData();

        form.append('name', name);
        form.append('email', email);
        form.append('message', message);

        try {
            const response = await fetch(scriptURL, {
                method: 'POST',
                body: form,
            });

            if (response.ok) {
                alert('Your message has been sent successfully!');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                alert('There was an issue sending your message. Please try again later.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="reach-us-container">
            
            <div className='information'>
                <h1 className='footprints'>Footprints Editions</h1>
                <hr className='red' />
                <ul>
                    <li><a href="https://drive.google.com/file/d/1xK7rInROCQ59MGoZqjlJTjw3wMp3WcUV/view?usp=sharing" target='_blank'>Footprints Edition 1</a></li>
                    <li><a href="https://drive.google.com/file/d/1VKp5kI0jD9sGoE3sVIr8hhgsfXTKhU23/view?usp=drive_link" target='_blank'>Footprints Edition 1-Issue - 2</a></li>
                    <li><a href="https://drive.google.com/file/d/1-zNNZUni8odeYjqxReuEnsUJoCgOJrh6/view?usp=sharing" target='_blank'>Footprints Edition 2</a></li>
                    <li><a href="https://drive.google.com/file/d/12dYoLelfl8mwL_QOZRzcWi1JtAUaM1vL/view?usp=sharing" target='_blank'>Footprints Edition 3</a></li>
                    <li><a href="https://drive.google.com/file/d/1DgO5z8jBIDzaLmW4LKhfwgjMg_bgC5Gg/view?usp=sharing" target='_blank'>Footprints Edition 4</a></li>
                    <li><a href="https://drive.google.com/file/d/1NqlkO0xRLRzX8HZwC9RS2OecIZdsxUIx/view?usp=sharing" target='_blank'>Footprints Edition 5</a></li>
                </ul>
            </div>
            <div className='information'>
                <h1 className='footprints'>Newsletters</h1>
                <hr className='red' />
                <ul>
                    <li><a href="https://drive.google.com/file/d/1V6h9yItZnlhNJlVNSrSyF2hm9PnXUK7a/view" target='_blank'>Newsletter 1</a></li>
                    <li><a href="https://drive.google.com/file/d/1GXC2ERhJ38DMiqiWA1d-XF9nTmi85nuT/view" target='_blank'>Newsletter 2</a></li>
                    <li><a href="https://drive.google.com/file/d/19ora8B9_tbcMfpF62jhX5NR7MAefCa8W/view" target='_blank'>Newsletter 3</a></li>
                </ul>
            </div>
                
            <form className="reach-us-form" onSubmit={handleSubmit}>
                <h2>Ask Your Query </h2>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Message:
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ReachUs;
