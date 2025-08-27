import React from 'react';

function SquareZIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M64 64C46.3 64 32 78.3 32 96V416c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm144 32H304c6 0 11.5 3.3 14.2 8.7s2.3 11.7-1.2 16.6L175.1 352H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-6 0-11.5-3.4-14.2-8.7s-2.3-11.7 1.2-16.6L272.9 160H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
    );
}

export default SquareZIcon;