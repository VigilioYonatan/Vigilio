import React from 'react';

function SquareEIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm88 96H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H176v56h88c13.3 0 24 10.7 24 24s-10.7 24-24 24H176v56H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24V256 152c0-13.3 10.7-24 24-24z"/></svg>
    );
}

export default SquareEIcon;