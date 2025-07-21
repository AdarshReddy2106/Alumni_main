import React, { useEffect, useState } from 'react';
import '../Main/Main.css';
import messagesData from '../../data/messages.json';

function Main() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(messagesData.messages);
  }, []);

  return (
    <section className="refer1">
      {messages.map((msg, idx) => (
        <div key={idx} className="message-block">
          <div className="name">
            <img src={msg.image} alt={msg.name} className="DEAN" />
            <div className="DirectorMessage">
              <hr className="length" />
              <p className="headfont"><span>{msg.role.toUpperCase()}</span></p>
              <hr />
              <p className="namefont">
                {msg.name}<br />
                <span className="profession">{msg.title}</span>
              </p>
            </div>
          </div>

          <div className="message">
            {msg.paragraphs.map((p, i) => (
              <p key={i} className="paragraph">{p}</p>
            ))}
            <br /><br />
            <hr />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Main;
