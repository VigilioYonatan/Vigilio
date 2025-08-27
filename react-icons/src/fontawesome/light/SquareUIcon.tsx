import React from 'react';

function SquareUIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M64 64C46.3 64 32 78.3 32 96V416c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm144 64V288c0 44.2 35.8 80 80 80s80-35.8 80-80V160c0-8.8 7.2-16 16-16s16 7.2 16 16V288c0 61.9-50.1 112-112 112s-112-50.1-112-112V160c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg>
    );
}

export default SquareUIcon;