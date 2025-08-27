import React from 'react';

function ArrowTurnUpIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M16 480c-8.8 0-16 7.2-16 16s7.2 16 16 16l112 0c44.2 0 80-35.8 80-80l0-377.4L308.7 155.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-128-128c-6.2-6.2-16.4-6.2-22.6 0l-128 128c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L176 54.6 176 432c0 26.5-21.5 48-48 48L16 480z"/></svg>
    );
}

export default ArrowTurnUpIcon;