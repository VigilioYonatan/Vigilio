import React from 'react';

function DialMedLowIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M288 56a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM197.5 378.5c-46.2-46.2-49.7-118.8-10.6-169l89.8 89.8c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-89.8-89.8c50.2-39.1 122.9-35.5 169 10.6c50 50 50 131 0 181s-131 50-181 0zM174.9 174.9A160 160 0 1 0 401.1 401.1 160 160 0 1 0 174.9 174.9zM568 288a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM32 312a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM120 96A24 24 0 1 0 72 96a24 24 0 1 0 48 0zm360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM120 480a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>
    );
}

export default DialMedLowIcon;