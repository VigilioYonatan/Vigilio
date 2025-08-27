import React from 'react';

function LockKeyholeOpenIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M432 64c-44.2 0-80 35.8-80 80v48h32c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H288V144C288 64.5 352.5 0 432 0s144 64.5 144 144v48c0 17.7-14.3 32-32 32s-32-14.3-32-32V144c0-44.2-35.8-80-80-80zM256 384c17.7 0 32-14.3 32-32s-14.3-32-32-32H192c-17.7 0-32 14.3-32 32s14.3 32 32 32h64z"/></svg>
    );
}

export default LockKeyholeOpenIcon;