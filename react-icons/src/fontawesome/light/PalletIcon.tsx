import React from 'react';

function PalletIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M16 352c-8.8 0-16 7.2-16 16s7.2 16 16 16H64v96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H80 320 560h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H576V384h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H560 320 80 16zm80 32H304v96H96V384zm240 0H544v96H336V384z"/></svg>
    );
}

export default PalletIcon;