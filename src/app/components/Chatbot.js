'use client'
'use client'
import { useState } from 'react'
import predefinedResponses from './data'
import styles from '../Chatbot.module.css'

const Chatbot = () => {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  const getResponse = (input) => {
    for (let key in predefinedResponses) {
      const { keywords, response } = predefinedResponses[key]
      for (let keyword of keywords) {
        if (input.toLowerCase().includes(keyword)) {
          return response
        }
      }
    }
    return predefinedResponses.default.response
  }

  const handleSend = () => {
    const newMessages = [...messages, { text: input, user: 'me' }]
    const response = getResponse(input)
    setMessages([...newMessages, { text: response, user: 'bot' }])
    setInput('')
  }

  return (
    <div className={styles.chatbot}>
      <div className={styles.chatHeader}>CHATBOT DPS</div>
      <div className={styles.chatWindow}>
        {messages.map((msg, index) => (
          <div key={index} className={msg.user === 'me' ? styles.me : styles.bot}>
            <div className={styles.messageBubble}>
              {msg.text}
            </div>

            <img
              src={msg.user === 'me'
                ? 'https://cdn-icons-png.flaticon.com/512/2919/2919600.png'
                : 'https://cdn.prod.website-files.com/6411daab15c8848a5e4e0153/6476e947d3fd3c906c9d4da6_4712109.png'}
              alt="avatar"
              className={styles.avatar}
            />
        
          </div>
        ))}
      </div>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Escriba algo..."
        />
        <button className={styles.button} onClick={handleSend}>
          <img src="https://cdn-icons-png.flaticon.com/512/660/660619.png" alt="send" className={styles.sendIcon} />
        </button>
      </div>
    </div>
  )
}

export default Chatbot

