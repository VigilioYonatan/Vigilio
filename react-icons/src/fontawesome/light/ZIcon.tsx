import React from 'react';

function ZIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M0 48c0-8.8 7.2-16 16-16H368c6.2 0 11.9 3.6 14.5 9.3s1.7 12.3-2.3 17.1L50.5 448H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-6.2 0-11.9-3.6-14.5-9.3s-1.7-12.3 2.3-17.1L333.5 64H16C7.2 64 0 56.8 0 48z"/></svg>
    );
}

export default ZIcon;