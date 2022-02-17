import { useState } from 'react';
import Avatar from './Avatar';
import './CharacterForm.css';



function CharacterForm() {

    const [tweetValue, setTweetValue] = useState('');
    console.log(tweetValue)
    const hanldeTweetValueChange = (e) => {
        setTweetValue(e.target.value);
    }


    return (
        <form className="character-form">
            <div  className="form-container">
                <Avatar />
                <textarea
                    value={tweetValue}
                    onChange={hanldeTweetValueChange}
                    className="from-textarea"
                    placeholder="What's happening?"
                />
            </div>
            <button className="form-submit">Tweet</button>
        </form>
    )
}

export default CharacterForm;