// let messages = [];

function reset() {
  // Get chat input box element
  let message = document.getElementById("chat-input");
  message.value = "";
  message.focus();

  // Get send button element
  let btnSend = document.getElementById("chat-btn");
  btnSend.disabled = true;
}

function onTypeMsgInChatInputBox() {
  // Get chat input box element value
  let message = document.getElementById("chat-input").value;
  // Get send button element
  let btnSend = document.getElementById("chat-btn");

  // Enable/disable send button
  if (message.trim() == "") {
    btnSend.disabled = true;
  } else {
    btnSend.disabled = false;
  }
}

function createTimestampDiv(timestamp) {
  let txt = document.createTextNode(timestamp);
  let smallTag = document.createElement("small");
  smallTag.appendChild(txt);

  let div = document.createElement("div");
  div.appendChild(smallTag);

  return div;
}

function createMessageDiv(message) {
  let txt = document.createTextNode(message);
  let pTag = document.createElement("p");
  pTag.appendChild(txt);

  let innerDiv = document.createElement("div");
  innerDiv.classList.add("talktext");
  innerDiv.appendChild(pTag);

  let outerDiv = document.createElement("div");
  outerDiv.classList.add("talk-bubble");
  outerDiv.classList.add("tri-right");
  outerDiv.classList.add("left-top");
  outerDiv.appendChild(innerDiv);

  return outerDiv;
}

function updateMessagesContainer(chat) {
  let timestampDiv = createTimestampDiv(chat.timestamp);
  let messageDiv = createMessageDiv(chat.message);

  let chatDiv = document.createElement("div");
  chatDiv.appendChild(timestampDiv);
  chatDiv.appendChild(messageDiv);

  let messageContainer = document.getElementById("messages-container");
  messageContainer.appendChild(chatDiv);

  // Always scroll to bottom
  messageContainer.scrollTop =
    messageContainer.scrollHeight - messageContainer.clientHeight;
}

function clickSend() {
  // Get chat input box element
  let chatInputBox = document.getElementById("chat-input");
  // Get send button element
  let btnSend = document.getElementById("chat-btn");

  // Add to messages
  chat = {
    timestamp: new Date().toLocaleString(),
    message: chatInputBox.value,
  };

  // Update messages container
  updateMessagesContainer(chat);

  // Reset chat input box and send button
  reset();
}
