import { logoWhite } from "./logo-white.ts";

function VigilioLogo() {
    return (
        <img
            src={logoWhite}
            className="vigilio-logo-chatbot"
            alt="vigilio-chat"
            title="vigilio-chat"
            width={100}
            height={100}
            style={{ width: "35px" }}
            loading="lazy"
        />
    );
}

export default VigilioLogo;
