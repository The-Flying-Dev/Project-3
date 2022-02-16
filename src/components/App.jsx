import React from 'react';
import tweets from '../tweets.json';


function App() {
    return (
        <div className="timeline">
        {/* map over each object in array */}
            {tweets.map(({ id, user, created_on, content }) => (
                <div key={id} className="tweet">
                    <div className="tweet-header">
                      <span className="tweet-user">@{user}</span> .{' '}
                      <span className="tweet-created-on">{created_on}</span>
                    </div>
                  <div className="tweet-content">{content}</div>
                </div>

            ))}
        </div>
    );
};

export default App;