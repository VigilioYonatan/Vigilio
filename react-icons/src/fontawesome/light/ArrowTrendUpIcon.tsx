import React from 'react';

function ArrowTrendUpIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M368 112c0-8.8 7.2-16 16-16H560c8.8 0 16 7.2 16 16V288c0 8.8-7.2 16-16 16s-16-7.2-16-16V150.6L331.3 363.3c-6.2 6.2-16.4 6.2-22.6 0L192 246.6 27.3 411.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l176-176c6.2-6.2 16.4-6.2 22.6 0L320 329.4 521.4 128H384c-8.8 0-16-7.2-16-16z"/></svg>
    );
}

export default ArrowTrendUpIcon;