import React from 'react';

function BrightnessLowIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M280 80a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM256 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0 160a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm0 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM432 280a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM56 256a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm96-128a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM408 384a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm0-256a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM104 384a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z"/></svg>
    );
}

export default BrightnessLowIcon;