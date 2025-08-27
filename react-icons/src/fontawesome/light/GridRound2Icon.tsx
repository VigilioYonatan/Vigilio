import React from 'react';

function GridRound2Icon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M128 192a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm96-64A96 96 0 1 1 32 128a96 96 0 1 1 192 0zM128 448a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm96-64A96 96 0 1 1 32 384a96 96 0 1 1 192 0zm96-256a64 64 0 1 0 128 0 64 64 0 1 0 -128 0zm64 96a96 96 0 1 1 0-192 96 96 0 1 1 0 192zm0 224a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm96-64a96 96 0 1 1 -192 0 96 96 0 1 1 192 0z"/></svg>
    );
}

export default GridRound2Icon;