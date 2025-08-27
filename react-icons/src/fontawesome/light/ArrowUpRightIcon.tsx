import React from 'react';

function ArrowUpRightIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M336 96c8.8 0 16 7.2 16 16V336c0 8.8-7.2 16-16 16s-16-7.2-16-16V150.6L59.3 411.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L297.4 128H112c-8.8 0-16-7.2-16-16s7.2-16 16-16H336z"/></svg>
    );
}

export default ArrowUpRightIcon;