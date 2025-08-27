import React from 'react';

function SquareQIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M64 64C46.3 64 32 78.3 32 96V416c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM128 256c0 53 43 96 96 96c20.7 0 39.9-6.6 55.6-17.7l-50.9-50.9c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l50.9 50.9C313.4 295.9 320 276.7 320 256c0-53-43-96-96-96s-96 43-96 96zm224 0c0 29.6-10 56.8-26.9 78.5l22.2 22.2c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-22.2-22.2C280.8 374 253.6 384 224 384c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128z"/></svg>
    );
}

export default SquareQIcon;