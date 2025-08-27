import React from 'react';

function CircleEIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM192 128c-17.7 0-32 14.3-32 32v96 96c0 17.7 14.3 32 32 32H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H192V272H304c8.8 0 16-7.2 16-16s-7.2-16-16-16H192V160H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H192z"/></svg>
    );
}

export default CircleEIcon;