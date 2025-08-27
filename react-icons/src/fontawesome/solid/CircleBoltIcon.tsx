import React from 'react';

function CircleBoltIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm74.1-396.4c5.8 4.7 7.6 12.9 4.2 19.6L281.9 240H352c6.8 0 12.9 4.3 15.1 10.7s.2 13.5-5.1 17.8l-160 128c-5.9 4.7-14.2 4.7-20.1-.1s-7.6-12.9-4.3-19.6L230.1 272H160c-6.8 0-12.8-4.3-15.1-10.7s-.2-13.5 5.1-17.8l160-128c5.9-4.7 14.2-4.7 20.1 .1z"/></svg>
    );
}

export default CircleBoltIcon;