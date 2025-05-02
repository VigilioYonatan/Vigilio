import { logoWhite } from "./logo-white.ts";

interface VigilioLogoProps {
    isFilter?: boolean;
}
function VigilioLogo({ isFilter = false }: VigilioLogoProps) {
    const isFilter2 = isFilter ? { filter: "invert(100%)" } : {};
    return (
        <img
            src={logoWhite}
            className="vigilio-logo-chatbot"
            alt="vigilio-chat"
            title="vigilio-chat"
            width={100}
            height={100}
            style={{ width: "35px", ...isFilter2 }}
            loading="lazy"
        />
    );
}

export default VigilioLogo;
