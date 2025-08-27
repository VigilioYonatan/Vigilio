import React from 'react';

function CircleSmallIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M288 256A128 128 0 1 0 32 256a128 128 0 1 0 256 0zM0 256a160 160 0 1 1 320 0A160 160 0 1 1 0 256z"/></svg>
    );
}

export default CircleSmallIcon;