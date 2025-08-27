import React from 'react';

function SquareTIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 112H224 328c13.3 0 24 10.7 24 24s-10.7 24-24 24H248V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V192H120c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg>
    );
}

export default SquareTIcon;