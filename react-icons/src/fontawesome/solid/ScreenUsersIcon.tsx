import React from 'react';

function ScreenUsersIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M96 0C60.7 0 32 28.7 32 64V248.4C49 233.2 71.4 224 96 224V64l448 0V224c24.6 0 47 9.2 64 24.4V64c0-35.3-28.7-64-64-64H96zm64 320A64 64 0 1 0 32 320a64 64 0 1 0 128 0zM0 480c0 17.7 14.3 32 32 32H160c17.7 0 32-14.3 32-32c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64zM384 320a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM224 480c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32c0-35.3-28.7-64-64-64H288c-35.3 0-64 28.7-64 64zm320-96a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-35.3 0-64 28.7-64 64c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32c0-35.3-28.7-64-64-64H512z"/></svg>
    );
}

export default ScreenUsersIcon;