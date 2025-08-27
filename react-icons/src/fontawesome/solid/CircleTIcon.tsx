import React from 'react';

function CircleTIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM152 144H256 360c13.3 0 24 10.7 24 24s-10.7 24-24 24H280V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V192H152c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg>
    );
}

export default CircleTIcon;