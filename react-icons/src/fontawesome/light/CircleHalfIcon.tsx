import React from 'react';

function CircleHalfIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M224 34.3C115.5 49.8 32 143.2 32 256s83.5 206.2 192 221.7V34.3zM224.1 2C241.6-.2 256 14.3 256 32V480c0 17.7-14.4 32.2-31.9 30C97.8 494.3 0 386.6 0 256S97.8 17.7 224.1 2z"/></svg>
    );
}

export default CircleHalfIcon;