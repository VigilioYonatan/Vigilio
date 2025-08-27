import React from 'react';

function BedEmptyIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M32 48c0-8.8-7.2-16-16-16S0 39.2 0 48V208 336v64 64c0 8.8 7.2 16 16 16s16-7.2 16-16V416H608v48c0 8.8 7.2 16 16 16s16-7.2 16-16V400 336 304c0-61.9-50.1-112-112-112H32V48zM608 320H32V224H528c44.2 0 80 35.8 80 80v16zM32 352H608v32H32V352z"/></svg>
    );
}

export default BedEmptyIcon;