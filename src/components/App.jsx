import React from 'react';
import Tweet from './Tweet';
import tweets from '../tweets.json';


function App() {
    return (
        <div className="timeline">
        {/* map over each object in array */}
            {tweets.map(({ id, user, created_on, content }) => (
                <Tweet key={id} user={user} createdOn={created_on}>
                    {content}
                </Tweet>
            ))}
        </div>
    );
};

export default App;