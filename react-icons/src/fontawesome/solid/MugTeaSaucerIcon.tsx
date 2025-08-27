import React from 'react';

function MugTeaSaucerIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M208 82.7V32H128c-17.7 0-32 14.3-32 32V288c0 53 43 96 96 96H384c53 0 96-43 96-96h32c70.7 0 128-57.3 128-128s-57.3-128-128-128H448 240V82.7c0 8.5 3.4 16.6 9.4 22.6l29.3 29.3c6 6 9.4 14.1 9.4 22.6V224c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V157.3c0-8.5 3.4-16.6 9.4-22.6l29.3-29.3c6-6 9.4-14.1 9.4-22.6zM480 96h32c35.3 0 64 28.7 64 64s-28.7 64-64 64H480V96zM32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z"/></svg>
    );
}

export default MugTeaSaucerIcon;