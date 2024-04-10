// ConversationContext.js
import React from 'react';

const ConversationContext = React.createContext({
    currentConversationId: null,
    setCurrentConversationId: () => { },
});

export default ConversationContext;
