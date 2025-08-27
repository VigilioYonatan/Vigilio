import React from 'react';

function CircleBIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 152c0-13.3 10.7-24 24-24h92c42 0 76 34 76 76c0 16.2-5.1 31.3-13.8 43.7C356.3 261.6 368 283.4 368 308c0 42-34 76-76 76H184c-13.3 0-24-10.7-24-24V256 152zm144 52c0-15.5-12.5-28-28-28H208v56h68c15.5 0 28-12.5 28-28zM208 336h84c15.5 0 28-12.5 28-28s-12.5-28-28-28H276 208v56z"/></svg>
    );
}

export default CircleBIcon;