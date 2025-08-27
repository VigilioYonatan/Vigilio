import React from 'react';

function SquareArrowDownIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M64 480c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64zm177-87L353 281c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-71 71V136c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-71-71c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L207 393c9.4 9.4 24.6 9.4 33.9 0z"/></svg>
    );
}

export default SquareArrowDownIcon;