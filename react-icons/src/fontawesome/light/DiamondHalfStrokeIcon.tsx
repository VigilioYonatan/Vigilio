import React from 'react';

function DiamondHalfStrokeIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M272 44.7V467.3L477.7 261.7c3.1-3.1 3.1-8.2 0-11.3L272 44.7zM240 467.3V44.7L34.3 250.3c-3.1 3.1-3.1 8.2 0 11.3L240 467.3zM227.7 11.7c15.6-15.6 40.9-15.6 56.6 0l216 216c15.6 15.6 15.6 40.9 0 56.6l-216 216c-15.6 15.6-40.9 15.6-56.6 0l-216-216c-15.6-15.6-15.6-40.9 0-56.6l216-216z"/></svg>
    );
}

export default DiamondHalfStrokeIcon;