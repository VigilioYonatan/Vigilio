import React from 'react';

function ButterIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M480 96V288H448V96H128c-17.7 0-32 14.3-32 32V288H64V128c0-35.3 28.7-64 64-64H448h16 16 32c35.3 0 64 28.7 64 64V288H544V128c0-17.7-14.3-32-32-32H480zM0 336c0-8.8 7.2-16 16-16H32 64 576h32 16c8.8 0 16 7.2 16 16s-7.2 16-16 16H608v48c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V352H16c-8.8 0-16-7.2-16-16zm64 16v48c0 8.8 7.2 16 16 16H560c8.8 0 16-7.2 16-16V352H64z"/></svg>
    );
}

export default ButterIcon;