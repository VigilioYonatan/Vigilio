import React from 'react';

function LandmarkFlagIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M272 32V64h64V32H272zm80 64H272v32H464c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.8 0-16-7.2-16-16s7.2-16 16-16H240V96 64 24 16c0-8.8 7.2-16 16-16h8 8 80c8.8 0 16 7.2 16 16V80c0 8.8-7.2 16-16 16zM48 368c0-8.8 7.2-16 16-16V192H96V352h80V192h32V352h96V192h32V352h80V192h32V352c8.8 0 16 7.2 16 16s-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM24 432c0-8.8 7.2-16 16-16H472c8.8 0 16 7.2 16 16s-7.2 16-16 16H40c-8.8 0-16-7.2-16-16zM0 496c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16z"/></svg>
    );
}

export default LandmarkFlagIcon;