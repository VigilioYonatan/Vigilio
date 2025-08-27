import React from 'react';

function SquareVIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm77.5 125.3L224 322.3l82.5-165.1c5.9-11.9 20.3-16.7 32.2-10.7s16.7 20.3 10.7 32.2l-104 208c-4.1 8.1-12.4 13.3-21.5 13.3s-17.4-5.1-21.5-13.3l-104-208c-5.9-11.9-1.1-26.3 10.7-32.2s26.3-1.1 32.2 10.7z"/></svg>
    );
}

export default SquareVIcon;