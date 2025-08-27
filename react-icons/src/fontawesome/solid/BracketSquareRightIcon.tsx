import React from 'react';

function BracketSquareRightIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M192 96c0-35.3-28.7-64-64-64H64C46.3 32 32 46.3 32 64s14.3 32 32 32h64V416H64c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c35.3 0 64-28.7 64-64V96z"/></svg>
    );
}

export default BracketSquareRightIcon;