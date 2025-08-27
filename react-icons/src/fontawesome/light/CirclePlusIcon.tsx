import React from 'react';

function CirclePlusIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM240 352c0 8.8 7.2 16 16 16s16-7.2 16-16V272h80c8.8 0 16-7.2 16-16s-7.2-16-16-16H272V160c0-8.8-7.2-16-16-16s-16 7.2-16 16v80H160c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v80z"/></svg>
    );
}

export default CirclePlusIcon;