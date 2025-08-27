import React from 'react';

function CircleChevronDownIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M256 480a224 224 0 1 1 0-448 224 224 0 1 1 0 448zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM132.7 235.3l112 112c6.2 6.2 16.4 6.2 22.6 0l112-112c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L256 313.4 155.3 212.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6z"/></svg>
    );
}

export default CircleChevronDownIcon;