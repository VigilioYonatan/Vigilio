import React from 'react';

function SquareZIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm72 96H312c9.3 0 17.8 5.4 21.8 13.9s2.6 18.5-3.5 25.6L187.7 336H312c13.3 0 24 10.7 24 24s-10.7 24-24 24H136c-9.3 0-17.8-5.4-21.8-13.9s-2.6-18.5 3.5-25.6L260.3 176H136c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg>
    );
}

export default SquareZIcon;