import React from 'react';

function BellConciergeIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M208 64c-8.8 0-16 7.2-16 16s7.2 16 16 16h32v48.6C123.8 152.8 32 249.7 32 368v16H64V368c0-106 86-192 192-192s192 86 192 192v16h32V368c0-118.3-91.8-215.2-208-223.4V96h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H256 208zM16 416c-8.8 0-16 7.2-16 16s7.2 16 16 16H496c8.8 0 16-7.2 16-16s-7.2-16-16-16H16z"/></svg>
    );
}

export default BellConciergeIcon;