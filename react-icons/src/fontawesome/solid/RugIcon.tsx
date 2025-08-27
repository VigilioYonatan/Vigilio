import React from 'react';

function RugIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M24 64H56 80V88v88 80 80 88 24H56 24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8V360H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8V280H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8V200H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8V112H24C10.7 112 0 101.3 0 88S10.7 64 24 64zm88 0H528V448H112V64zM640 88c0 13.3-10.7 24-24 24h-8v40h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v32h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v32h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v40h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H584 560V424 336 256 176 88 64h24 32c13.3 0 24 10.7 24 24z"/></svg>
    );
}

export default RugIcon;