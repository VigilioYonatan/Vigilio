import React from 'react';

function SquareUIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm96 136V288c0 35.3 28.7 64 64 64s64-28.7 64-64V168c0-13.3 10.7-24 24-24s24 10.7 24 24V288c0 61.9-50.1 112-112 112s-112-50.1-112-112V168c0-13.3 10.7-24 24-24s24 10.7 24 24z"/></svg>
    );
}

export default SquareUIcon;