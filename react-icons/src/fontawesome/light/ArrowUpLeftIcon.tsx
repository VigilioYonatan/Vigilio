import React from 'react';

function ArrowUpLeftIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M48 96c-8.8 0-16 7.2-16 16V336c0 8.8 7.2 16 16 16s16-7.2 16-16V150.6L324.7 411.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L86.6 128H272c8.8 0 16-7.2 16-16s-7.2-16-16-16H48z"/></svg>
    );
}

export default ArrowUpLeftIcon;