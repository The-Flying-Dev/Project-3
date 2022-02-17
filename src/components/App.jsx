import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import CharacterForm from './CharacterForm'
import Timeline from './Timeline'
import { FaTwitter } from 'react-icons/fa'
import './App.css'
import storedTweets from '../tweets.json';

const CURRENT_USER = 'RailsDev';


function App() {

    const [tweets, setTweets] = useState(storedTweets);
    
    const handlePostTweet = (content) => {
        const newTweet = {
            content,
            id: nanoid(),
            created_on: Date(Date.now()),
            user: CURRENT_USER,
            comments_count: 0,
            retweets_count: 0,
            favorites_count: 0,
        }

      setTweets([...tweets, newTweet])
    }

    return (
      <div className="app">
        <FaTwitter className="app-logo" size="2em" />
        <CharacterForm onSubmit={handlePostTweet}/>
        <div className="separator"></div>
        <Timeline tweets={tweets} />
      </div>
    )
}

export default App;