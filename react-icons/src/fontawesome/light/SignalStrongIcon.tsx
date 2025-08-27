import React from 'react';

function SignalStrongIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M464 112c0-8.8-7.2-16-16-16s-16 7.2-16 16V496c0 8.8 7.2 16 16 16s16-7.2 16-16V112zM320 192c-8.8 0-16 7.2-16 16V496c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zM208 304c0-8.8-7.2-16-16-16s-16 7.2-16 16V496c0 8.8 7.2 16 16 16s16-7.2 16-16V304zM80 400c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V400z"/></svg>
    );
}

export default SignalStrongIcon;