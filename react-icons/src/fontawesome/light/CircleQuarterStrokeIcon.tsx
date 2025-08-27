import React from 'react';

function CircleQuarterStrokeIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M480 256C480 132.3 379.7 32 256 32V208c0 26.5-21.5 48-48 48H32c0 123.7 100.3 224 224 224s224-100.3 224-224zM224 34.3C125.9 48.3 48.3 125.9 34.3 224H208c8.8 0 16-7.2 16-16V34.3zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
    );
}

export default CircleQuarterStrokeIcon;