import React from 'react';

function CircleArrowDownLeftIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M256 512A256 256 0 1 1 256 0a256 256 0 1 1 0 512zm64-144c13.3 0 24-10.7 24-24s-10.7-24-24-24H225.9L361 185c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-135 135V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V344c0 13.3 10.7 24 24 24H320z"/></svg>
    );
}

export default CircleArrowDownLeftIcon;