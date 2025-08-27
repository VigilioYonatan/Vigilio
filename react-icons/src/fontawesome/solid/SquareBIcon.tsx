import React from 'react';

function SquareBIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm64 120c0-13.3 10.7-24 24-24h92c42 0 76 34 76 76c0 16.2-5.1 31.3-13.8 43.7C324.3 261.6 336 283.4 336 308c0 42-34 76-76 76H152c-13.3 0-24-10.7-24-24V256 152zm144 52c0-15.5-12.5-28-28-28H176v56h68c15.5 0 28-12.5 28-28zM176 336h84c15.5 0 28-12.5 28-28s-12.5-28-28-28H244 176v56z"/></svg>
    );
}

export default SquareBIcon;