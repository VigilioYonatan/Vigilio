import React from 'react';

function GreaterThanIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M1.7 72.8c-4 7.9-.7 17.5 7.2 21.5L332.2 256 8.8 417.7c-7.9 4-11.1 13.6-7.2 21.5s13.6 11.1 21.5 7.2l352-176c5.4-2.7 8.8-8.3 8.8-14.3s-3.4-11.6-8.8-14.3l-352-176c-7.9-4-17.5-.7-21.5 7.2z"/></svg>
    );
}

export default GreaterThanIcon;