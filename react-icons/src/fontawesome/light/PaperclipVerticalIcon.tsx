import React from 'react';

function PaperclipVerticalIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M64 96c0-53 43-96 96-96s96 43 96 96V352c0 35.3-28.7 64-64 64s-64-28.7-64-64V144c0-8.8 7.2-16 16-16s16 7.2 16 16V352c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-35.3-28.7-64-64-64s-64 28.7-64 64V384c0 53 43 96 96 96s96-43 96-96V144c0-8.8 7.2-16 16-16s16 7.2 16 16V384c0 70.7-57.3 128-128 128s-128-57.3-128-128V96z"/></svg>
    );
}

export default PaperclipVerticalIcon;