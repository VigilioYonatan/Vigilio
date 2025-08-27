import React from 'react';

function SquareArrowDownRightIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M384 480c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384zM160 368c-13.3 0-24-10.7-24-24s10.7-24 24-24h94.1L119 185c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l135 135V184c0-13.3 10.7-24 24-24s24 10.7 24 24V344c0 13.3-10.7 24-24 24H160z"/></svg>
    );
}

export default SquareArrowDownRightIcon;