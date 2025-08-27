import React from 'react';

function SignalBarsWeakIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M32 432c0-26.5 21.5-48 48-48s48 21.5 48 48v32c0 26.5-21.5 48-48 48s-48-21.5-48-48V432z"/></svg>
    );
}

export default SignalBarsWeakIcon;