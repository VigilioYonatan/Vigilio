import React from 'react';

function RectangleVerticalHistoryIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M256 32c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H512c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H256zM192 64c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H256c-35.3 0-64-28.7-64-64V64zM96 64c0-8.8 7.2-16 16-16s16 7.2 16 16V448c0 8.8-7.2 16-16 16s-16-7.2-16-16V64zM0 112c0-8.8 7.2-16 16-16s16 7.2 16 16V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V112z"/></svg>
    );
}

export default RectangleVerticalHistoryIcon;