import React from 'react';

function ChevronsUpIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M267.3 52.7c-6.2-6.2-16.4-6.2-22.6 0l-192 192c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L256 86.6 436.7 267.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-192-192zm192 384l-192-192c-6.2-6.2-16.4-6.2-22.6 0l-192 192c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L256 278.6 436.7 459.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6z"/></svg>
    );
}

export default ChevronsUpIcon;