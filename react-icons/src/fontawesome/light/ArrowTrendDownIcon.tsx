import React from 'react';

function ArrowTrendDownIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M368 400c0 8.8 7.2 16 16 16H560c8.8 0 16-7.2 16-16V224c0-8.8-7.2-16-16-16s-16 7.2-16 16V361.4L331.3 148.7c-6.2-6.2-16.4-6.2-22.6 0L192 265.4 27.3 100.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l176 176c6.2 6.2 16.4 6.2 22.6 0L320 182.6 521.4 384H384c-8.8 0-16 7.2-16 16z"/></svg>
    );
}

export default ArrowTrendDownIcon;