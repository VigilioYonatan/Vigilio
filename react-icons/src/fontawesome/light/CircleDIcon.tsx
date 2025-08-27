import React from 'react';

function CircleDIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-160H192V160h64c53 0 96 43 96 96s-43 96-96 96zM190.8 128c-17 0-30.8 13.8-30.8 30.8V353.2c0 17 13.8 30.8 30.8 30.8H256c70.7 0 128-57.3 128-128s-57.3-128-128-128H190.8z"/></svg>
    );
}

export default CircleDIcon;