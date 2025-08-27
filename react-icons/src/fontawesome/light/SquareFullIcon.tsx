import React from 'react';

function SquareFullIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M480 32V480H32V32H480zM32 0H0V32 480v32H32 480h32V480 32 0H480 32z"/></svg>
    );
}

export default SquareFullIcon;