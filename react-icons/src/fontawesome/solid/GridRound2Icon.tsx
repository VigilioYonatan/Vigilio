import React from 'react';

function GridRound2Icon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M128 32a96 96 0 1 0 0 192 96 96 0 1 0 0-192zm0 256a96 96 0 1 0 0 192 96 96 0 1 0 0-192zM288 128a96 96 0 1 0 192 0 96 96 0 1 0 -192 0zm96 160a96 96 0 1 0 0 192 96 96 0 1 0 0-192z"/></svg>
    );
}

export default GridRound2Icon;