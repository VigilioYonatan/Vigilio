import React from 'react';

function ShelvesEmptyIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M32 16C32 7.2 24.8 0 16 0S0 7.2 0 16V176 432v64c0 8.8 7.2 16 16 16s16-7.2 16-16V448H608v48c0 8.8 7.2 16 16 16s16-7.2 16-16V432 176 16c0-8.8-7.2-16-16-16s-16 7.2-16 16V160H32V16zm0 176H608V416H32V192z"/></svg>
    );
}

export default ShelvesEmptyIcon;