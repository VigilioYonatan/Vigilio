import React from 'react';

function SquareListIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm32-128a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm96-248c-13.3 0-24 10.7-24 24s10.7 24 24 24H352c13.3 0 24-10.7 24-24s-10.7-24-24-24H192zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H352c13.3 0 24-10.7 24-24s-10.7-24-24-24H192zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H352c13.3 0 24-10.7 24-24s-10.7-24-24-24H192z"/></svg>
    );
}

export default SquareListIcon;