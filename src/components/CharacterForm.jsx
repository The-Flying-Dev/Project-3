import { useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import './CharacterForm.css';



function CharacterForm({ onSubmit }) {

    const [tweetValue, setTweetValue] = useState('');
    console.log(tweetValue)

    const handleTweetValueChange = (e) => {
        setTweetValue(e.target.value);
    }

    const handleSubmit =(e) => {
        e.preventDefault();
        onSubmit(tweetValue);

        setTweetValue('');
    }

    return (
        <form className="character-form" onSubmit={handleSubmit}>
            <div  className="form-container">
                <Avatar />
                <textarea
                    value={tweetValue}
                    onChange={handleTweetValueChange}
                    className="from-textarea"
                    placeholder="What's happening?"
                />
            </div>
            <button className="form-submit">Tweet</button>
        </form>
    )
}

CharacterForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default CharacterForm;