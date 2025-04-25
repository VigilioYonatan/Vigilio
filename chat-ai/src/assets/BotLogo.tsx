import BOTLOGO from "./bot.svg";

function BotoLogo() {
    return (
        <img
            src={BOTLOGO}
            width={200}
            height={200}
            alt="bot logo"
            title="bot"
            loading="lazy"
        />
    );
}

export default BotoLogo;
