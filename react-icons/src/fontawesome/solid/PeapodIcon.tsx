import React from 'react';

function PeapodIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M464 0H416C186.2 0 0 186.2 0 416v48c0 26.5 21.5 48 48 48H96c229.8 0 416-186.2 416-416V48c0-26.5-21.5-48-48-48zM256 200a56 56 0 1 1 0 112 56 56 0 1 1 0-112zM88 368a56 56 0 1 1 112 0A56 56 0 1 1 88 368zM368 88a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/></svg>
    );
}

export default PeapodIcon;