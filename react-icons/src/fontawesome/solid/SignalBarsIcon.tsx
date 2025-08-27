import React from 'react';

function SignalBarsIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M560 0c-26.5 0-48 21.5-48 48V464c0 26.5 21.5 48 48 48s48-21.5 48-48V48c0-26.5-21.5-48-48-48zM352 176V464c0 26.5 21.5 48 48 48s48-21.5 48-48V176c0-26.5-21.5-48-48-48s-48 21.5-48 48zM240 256c-26.5 0-48 21.5-48 48V464c0 26.5 21.5 48 48 48s48-21.5 48-48V304c0-26.5-21.5-48-48-48zM80 384c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48s48-21.5 48-48V432c0-26.5-21.5-48-48-48z"/></svg>
    );
}

export default SignalBarsIcon;