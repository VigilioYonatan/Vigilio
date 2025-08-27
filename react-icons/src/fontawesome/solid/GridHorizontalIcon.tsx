import React from 'react';

function GridHorizontalIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M128 168c0-22.1-17.9-40-40-40H40c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40H88c22.1 0 40-17.9 40-40V168zm0 160c0-22.1-17.9-40-40-40H40c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40H88c22.1 0 40-17.9 40-40V328zm32-160v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V168c0-22.1-17.9-40-40-40H200c-22.1 0-40 17.9-40 40zM288 328c0-22.1-17.9-40-40-40H200c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V328zm32-160v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V168c0-22.1-17.9-40-40-40H360c-22.1 0-40 17.9-40 40zM448 328c0-22.1-17.9-40-40-40H360c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V328z"/></svg>
    );
}

export default GridHorizontalIcon;