import React from 'react';

function ArrowUpIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M203.3 36.7c-6.2-6.2-16.4-6.2-22.6 0l-176 176c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L176 86.6V464c0 8.8 7.2 16 16 16s16-7.2 16-16V86.6L356.7 235.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-176-176z"/></svg>
    );
}

export default ArrowUpIcon;