import React from 'react';

function ArrowTurnLeftIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256H416c17.7 0 32 14.3 32 32V448c0 17.7 14.3 32 32 32s32-14.3 32-32V288c0-53-43-96-96-96H109.3l73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3l128 128z"/></svg>
    );
}

export default ArrowTurnLeftIcon;