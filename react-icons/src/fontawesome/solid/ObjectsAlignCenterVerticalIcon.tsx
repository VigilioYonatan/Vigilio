import React from 'react';

function ObjectsAlignCenterVerticalIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M64 80c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48V232h64V144c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v88h40c13.3 0 24 10.7 24 24s-10.7 24-24 24H448v88c0 26.5-21.5 48-48 48H336c-26.5 0-48-21.5-48-48V280H224V432c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V280H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H64V80z"/></svg>
    );
}

export default ObjectsAlignCenterVerticalIcon;