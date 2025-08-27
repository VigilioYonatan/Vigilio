import React from 'react';

function RectangleVerticalHistoryIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M256 0c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H256zM96 72V440c0 13.3 10.7 24 24 24s24-10.7 24-24V72c0-13.3-10.7-24-24-24s-24 10.7-24 24zM0 120V392c0 13.3 10.7 24 24 24s24-10.7 24-24V120c0-13.3-10.7-24-24-24S0 106.7 0 120z"/></svg>
    );
}

export default RectangleVerticalHistoryIcon;