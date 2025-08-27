import React from 'react';

function CircleArrowDownRightIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM192 368c-13.3 0-24-10.7-24-24s10.7-24 24-24h94.1L151 185c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l135 135V184c0-13.3 10.7-24 24-24s24 10.7 24 24V344c0 13.3-10.7 24-24 24H192z"/></svg>
    );
}

export default CircleArrowDownRightIcon;