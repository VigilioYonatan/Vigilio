import React from 'react';

function BackwardFastIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M16 64c8.8 0 16 7.2 16 16V215.8L210.6 70.2c5-4 11.2-6.2 17.6-6.2C243.6 64 256 76.4 256 91.8V241.9L466.6 70.2c5-4 11.2-6.2 17.6-6.2C499.6 64 512 76.4 512 91.8V420.2c0 15.4-12.4 27.8-27.8 27.8c-6.4 0-12.6-2.2-17.6-6.2L256 270.1V420.2c0 15.4-12.4 27.8-27.8 27.8c-6.4 0-12.6-2.2-17.6-6.2L32 296.2V432c0 8.8-7.2 16-16 16s-16-7.2-16-16V270.1 241.9 80c0-8.8 7.2-16 16-16zM33.3 256L224 411.4V100.6L33.3 256zM480 100.6L289.3 256 480 411.4V100.6z"/></svg>
    );
}

export default BackwardFastIcon;