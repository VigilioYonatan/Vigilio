import React from 'react';

function CodeCommitIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M320 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm127-80c-7.9 63.1-61.7 112-127 112s-119.1-48.9-127-112H16c-8.8 0-16-7.2-16-16s7.2-16 16-16H193c7.9-63.1 61.7-112 127-112s119.1 48.9 127 112H624c8.8 0 16 7.2 16 16s-7.2 16-16 16H447z"/></svg>
    );
}

export default CodeCommitIcon;