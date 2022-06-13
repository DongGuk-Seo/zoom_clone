const messageList = document.querySelector('ul');
const nickForm = document.querySelector('#nickname');
const messageForm = document.querySelector('#message');
const socket = new WebSocket(`ws://${window.location.host}`);

function makeMassage(type, payload) {
    const msg = { type, payload }
    return JSON.stringify(msg);
}

socket.addEventListener("open", () => {
    console.log("Connected to Server");
});

socket.addEventListener("message", (message) => {
    const li = document.createElement("li");
    li.innerText = message.data;
    messageList.append(li);
});

socket.addEventListener("close", () => {
    console.log("Disconnected to Server");
});

function handleSubmit(event) {
    event.preventDefault();
    const input = messageForm.querySelector("input");
    const li = document.createElement("li");
    socket.send(makeMassage("new_message", input.value));
    li.innerText = `You : ${input.value}`;
    messageList.append(li);
    input.value = '';
}

function handleNickSubmit(event) {
    event.preventDefault();
    const input = nickForm.querySelector("input");
    socket.send(makeMassage("nickname", input.value));
    input.value = '';
}

messageForm.addEventListener("submit", handleSubmit);
nickForm.addEventListener("submit", handleNickSubmit);