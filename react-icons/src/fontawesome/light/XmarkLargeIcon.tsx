import React from 'react';

function XmarkLargeIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M420.7 36.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L246.6 256 443.3 452.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L224 278.6 27.3 475.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L201.4 256 4.7 59.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L224 233.4 420.7 36.7z"/></svg>
    );
}

export default XmarkLargeIcon;