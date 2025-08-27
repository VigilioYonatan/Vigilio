import React from 'react';

function OptionIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M448 448c-9.7 0-18.9-4.4-25-12L176.6 128H32C14.3 128 0 113.7 0 96S14.3 64 32 64H192c9.7 0 18.9 4.4 25 12L463.4 384H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H448zm0-320c-17.7 0-32-14.3-32-32s14.3-32 32-32H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H448z"/></svg>
    );
}

export default OptionIcon;