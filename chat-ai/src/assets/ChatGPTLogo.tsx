import CHATGPTLOGO from "./chat-gpt-logo.webp";

function ChatGPTLogo() {
    return (
        <img
            class="vigilio-rotating"
            width={200}
            height={200}
            src={CHATGPTLOGO}
            alt="chatgpt logo"
            title="chatgpt"
            loading="lazy"
        />
    );
}

export default ChatGPTLogo;
