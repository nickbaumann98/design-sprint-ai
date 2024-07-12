import React from 'react';

const DeepChat = ({ goal, onFeedback }) => {
    const handleFeedback = () => {
        onFeedback(`Polished version of: ${goal}`);
    };

    return (
        <div className="deep-chat">
            <h2>Analyzing: {goal}</h2>
            <button onClick={handleFeedback}>Next</button>
        </div>
    );
};

export default DeepChat;
