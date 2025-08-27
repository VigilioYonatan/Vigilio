import React from 'react';

function SquareNIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm90.3 104.5L288 294.5V152c0-13.3 10.7-24 24-24s24 10.7 24 24V360c0 10.1-6.3 19.1-15.7 22.5s-20.1 .7-26.6-7L160 217.5V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-10.1 6.3-19.1 15.7-22.5s20.1-.7 26.6 7z"/></svg>
    );
}

export default SquareNIcon;