// Query the active tab and get messages
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    
    // Check if we're on ChatGPT
    if (!tab.url.includes('chat.openai.com') && !tab.url.includes('chatgpt.com')) {
      document.getElementById('message-list').innerHTML = `
        <div class="empty-state">
          <p>Please open ChatGPT first!</p>
          <p style="margin-top: 8px; font-size: 12px;">
            Go to <a href="https://chat.openai.com" target="_blank" style="color: #10a37f;">chat.openai.com</a>
          </p>
        </div>
      `;
      return;
    }
  
    // Request messages from content script
    chrome.tabs.sendMessage(tab.id, { action: 'getMessages' }, (response) => {
      if (chrome.runtime.lastError || !response) {
        document.getElementById('message-list').innerHTML = `
          <div class="empty-state">
            <p>Could not connect to ChatGPT.</p>
            <button class="refresh-btn" onclick="location.reload()">Try Again</button>
          </div>
        `;
        return;
      }
  
      renderMessages(response.messages, tab.id);
    });
  });
  
  function renderMessages(messages, tabId) {
    const container = document.getElementById('message-list');
    
    if (!messages || messages.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <p>No messages found yet.</p>
          <p style="margin-top: 8px; font-size: 12px;">Start a conversation first!</p>
        </div>
      `;
      return;
    }
  
    container.innerHTML = messages.map((msg, index) => `
      <div class="message-item" data-index="${index}">
        <div class="message-number">Message ${index + 1}</div>
        <div class="message-preview">${escapeHtml(msg.preview)}</div>
      </div>
    `).join('');
  
    // Add click handlers
    container.querySelectorAll('.message-item').forEach((item) => {
      item.addEventListener('click', () => {
        const index = parseInt(item.dataset.index);
        chrome.tabs.sendMessage(tabId, { 
          action: 'scrollToMessage', 
          index: index 
        });
        window.close();
      });
    });
  }
  
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }