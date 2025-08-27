import React from 'react';

function DiagramCellsIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M512 160c0 35.3-28.7 64-64 64L64 224c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64v64zM448 416V352H64v64l384 0zm0 64L64 480c-35.3 0-64-28.7-64-64V352c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64z"/></svg>
    );
}

export default DiagramCellsIcon;