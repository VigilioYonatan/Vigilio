import React from 'react';

function CircleDIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 128h72c70.7 0 128 57.3 128 128s-57.3 128-128 128H184c-13.3 0-24-10.7-24-24V152c0-13.3 10.7-24 24-24zm72 208c44.2 0 80-35.8 80-80s-35.8-80-80-80H208V336h48z"/></svg>
    );
}

export default CircleDIcon;