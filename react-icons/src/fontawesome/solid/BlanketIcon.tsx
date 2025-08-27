import React from 'react';

function BlanketIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M0 128V352c0 70.7 57.3 128 128 128H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H128c-35.3 0-64-28.7-64-64s28.7-64 64-64H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H128c-17.7 0-32 14.3-32 32s14.3 32 32 32H368c44.2 0 80-35.8 80-80V128c0-53-43-96-96-96H96C43 32 0 75 0 128z"/></svg>
    );
}

export default BlanketIcon;