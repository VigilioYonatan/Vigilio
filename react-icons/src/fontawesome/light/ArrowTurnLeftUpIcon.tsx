import React from 'react';

function ArrowTurnLeftUpIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M331.3 132.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L208 54.6 208 432c0 26.5 21.5 48 48 48l112 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-112 0c-44.2 0-80-35.8-80-80l0-377.4L75.3 155.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l128-128c6.2-6.2 16.4-6.2 22.6 0l128 128z"/></svg>
    );
}

export default ArrowTurnLeftUpIcon;