// Content script that runs on ChatGPT pages

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getMessages') {
      const messages = getUserMessages();
      sendResponse({ messages });
    } else if (request.action === 'scrollToMessage') {
      scrollToMessage(request.index);
    }
    return true;
  });
  
  function getUserMessages() {
    const userMessages = document.querySelectorAll('[data-message-author-role="user"]');
    
    return Array.from(userMessages).map((msg, index) => {
      const text = msg.innerText.trim();
      return {
        index,
        preview: text.substring(0, 100) + (text.length > 100 ? '...' : ''),
        fullText: text
      };
    });
  }
  
  function scrollToMessage(index) {
    const userMessages = document.querySelectorAll('[data-message-author-role="user"]');
    const targetMessage = userMessages[index];
    
    if (targetMessage) {
      // Scroll to the message
      targetMessage.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
      
      // Highlight the message temporarily
      targetMessage.style.transition = 'box-shadow 0.3s ease';
      targetMessage.style.boxShadow = '0 0 0 3px #10a37f';
      
      setTimeout(() => {
        targetMessage.style.boxShadow = '';
      }, 2000);
    }
  }
  
  // Log that content script is loaded (for debugging)
  console.log('[ChatGPT Navigator] Content script loaded');