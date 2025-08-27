import React from 'react';

function ApostropheIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M72 352c66.3 0 120-53.7 120-120V160 128 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64h64v8c0 30.9-25.1 56-56 56H64c-17.7 0-32 14.3-32 32s14.3 32 32 32h8z"/></svg>
    );
}

export default ApostropheIcon;