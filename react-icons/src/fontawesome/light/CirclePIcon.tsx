import React from 'react';

function CirclePIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM176 128c-8.8 0-16 7.2-16 16V288v80c0 8.8 7.2 16 16 16s16-7.2 16-16V304h72c48.6 0 88-39.4 88-88s-39.4-88-88-88H176zm88 144H192V160h72c30.9 0 56 25.1 56 56s-25.1 56-56 56z"/></svg>
    );
}

export default CirclePIcon;