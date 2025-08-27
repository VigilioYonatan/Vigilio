import React from 'react';

function ObjectUnionIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M64 0C28.7 0 0 28.7 0 64V288c0 35.3 28.7 64 64 64h96v96c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64H352V64c0-35.3-28.7-64-64-64H64z"/></svg>
    );
}

export default ObjectUnionIcon;