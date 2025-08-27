import React from 'react';

function PaperPlaneTopIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M3.4 78.3c-6-12-3.9-26.5 5.3-36.3s23.5-12.7 35.9-7.5l448 192c11.8 5 19.4 16.6 19.4 29.4s-7.6 24.4-19.4 29.4l-448 192c-12.3 5.3-26.7 2.3-35.9-7.5s-11.3-24.3-5.3-36.3L92.2 256 3.4 78.3zM120 272L32 448 442.7 272H120zm322.7-32L32 64l88 176H442.7z"/></svg>
    );
}

export default PaperPlaneTopIcon;