import React from 'react';

function SquareDashedIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M88 32h24c8.8 0 16 7.2 16 16s-7.2 16-16 16H88c-30.9 0-56 25.1-56 56v24c0 8.8-7.2 16-16 16s-16-7.2-16-16V120C0 71.4 39.4 32 88 32zM16 192c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V208c0-8.8 7.2-16 16-16zm416 0c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V208c0-8.8 7.2-16 16-16zm0-32c-8.8 0-16-7.2-16-16V120c0-30.9-25.1-56-56-56H336c-8.8 0-16-7.2-16-16s7.2-16 16-16h24c48.6 0 88 39.4 88 88v24c0 8.8-7.2 16-16 16zm16 208v24c0 48.6-39.4 88-88 88H336c-8.8 0-16-7.2-16-16s7.2-16 16-16h24c30.9 0 56-25.1 56-56V368c0-8.8 7.2-16 16-16s16 7.2 16 16zM32 368v24c0 30.9 25.1 56 56 56h24c8.8 0 16 7.2 16 16s-7.2 16-16 16H88c-48.6 0-88-39.4-88-88V368c0-8.8 7.2-16 16-16s16 7.2 16 16zM176 480c-8.8 0-16-7.2-16-16s7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H176zM160 48c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16z"/></svg>
    );
}

export default SquareDashedIcon;