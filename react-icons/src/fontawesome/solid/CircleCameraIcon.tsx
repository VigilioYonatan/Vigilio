import React from 'react';

function CircleCameraIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM196 160l6.2-16.4c3.5-9.4 12.5-15.6 22.5-15.6h62.7c10 0 19 6.2 22.5 15.6L316 160h36c17.7 0 32 14.3 32 32V320c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32h36zm108 96a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"/></svg>
    );
}

export default CircleCameraIcon;