import React from 'react';

function BatteryExclamationIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M208 96H80C35.8 96 0 131.8 0 176V336c0 44.2 35.8 80 80 80H216.6c-5.4-9.4-8.6-20.3-8.6-32H80c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48H208V96zM432 416c44.2 0 80-35.8 80-80V176c0-44.2-35.8-80-80-80H336v32h96c26.5 0 48 21.5 48 48V336c0 26.5-21.5 48-48 48H336c0 11.7-3.1 22.6-8.6 32H432zM576 208c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V208zM272 96c-8.8 0-16 7.2-16 16V296c0 8.8 7.2 16 16 16s16-7.2 16-16V112c0-8.8-7.2-16-16-16zm24 280a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"/></svg>
    );
}

export default BatteryExclamationIcon;