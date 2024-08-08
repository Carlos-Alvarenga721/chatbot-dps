'use client'
import { useState } from 'react'
import styles from '../chatbot.module.css'

const Chatbot = () => {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  const predefinedResponses = {
    hello: 'Hi there! How can I help you today?',
    help: 'Sure, I am here to help you. What do you need assistance with?',
    default: 'I am not sure how to respond to that. Can you please clarify?'
  }

  const getResponse = (input) => {
    const keywords = Object.keys(predefinedResponses)
    for (let keyword of keywords) {
      if (input.toLowerCase().includes(keyword)) {
        return predefinedResponses[keyword]
      }
    }
    return predefinedResponses.default
  }

  const handleSend = () => {
    const newMessages = [...messages, { text: input, user: 'me' }]
    const response = getResponse(input)
    setMessages([...newMessages, { text: response, user: 'bot' }])
    setInput('')
  }

  return (
    <div className={styles.chatbot}>
      <div className={styles.chatWindow}>
        {messages.map((msg, index) => (
          <div key={index} className={msg.user === 'me' ? styles.me : styles.bot}>
            <div className={styles.messageBubble}>{msg.text}</div>
          </div>
        ))}
      </div>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button className={styles.button} onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default Chatbot
