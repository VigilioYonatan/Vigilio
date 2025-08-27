import React from 'react';

function PauseIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M48 96c-8.8 0-16 7.2-16 16V400c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H48zM0 112C0 85.5 21.5 64 48 64H96c26.5 0 48 21.5 48 48V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112zM224 96c-8.8 0-16 7.2-16 16V400c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H224zm-48 16c0-26.5 21.5-48 48-48h48c26.5 0 48 21.5 48 48V400c0 26.5-21.5 48-48 48H224c-26.5 0-48-21.5-48-48V112z"/></svg>
    );
}

export default PauseIcon;