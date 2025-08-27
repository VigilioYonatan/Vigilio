import React from 'react';

function CircleEllipsisIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M256 480a224 224 0 1 0 0-448 224 224 0 1 0 0 448zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm24 256a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm72-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM184 256a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z"/></svg>
    );
}

export default CircleEllipsisIcon;