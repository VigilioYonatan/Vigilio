import React from 'react';

function XIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M380.2 58.3c5.7-6.7 4.9-16.8-1.9-22.5s-16.8-4.9-22.6 1.9L192 231.2 28.2 37.7c-5.7-6.7-15.8-7.6-22.5-1.9s-7.6 15.8-1.9 22.5L171 256 3.8 453.7c-5.7 6.7-4.9 16.8 1.9 22.6s16.8 4.9 22.5-1.9L192 280.8 355.8 474.3c5.7 6.7 15.8 7.6 22.6 1.9s7.6-15.8 1.9-22.6L213 256 380.2 58.3z"/></svg>
    );
}

export default XIcon;