import React from 'react';

function ClockDeskIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M0 224a224 224 0 1 1 448 0A224 224 0 1 1 0 224zM224 96c-13.3 0-24 10.7-24 24V224c0 6.4 2.5 12.5 7 17l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-41-41V120c0-13.3-10.7-24-24-24zm0 384c96.4 0 180.3-53.3 224-132V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V348c43.7 78.7 127.6 132 224 132z"/></svg>
    );
}

export default ClockDeskIcon;