import React from 'react';

function ObjectUnionIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M160 320c17.7 0 32 14.3 32 32v96c0 17.7 14.3 32 32 32H448c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H352c-17.7 0-32-14.3-32-32V64c0-17.7-14.3-32-32-32H64C46.3 32 32 46.3 32 64V288c0 17.7 14.3 32 32 32h96zm-32 32H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H288c35.3 0 64 28.7 64 64v64 32h32 64c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V384 352H128z"/></svg>
    );
}

export default ObjectUnionIcon;