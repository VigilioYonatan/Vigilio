import React from 'react';

function WaveformLinesIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M352 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM544 96c0-17.7-14.3-32-32-32s-32 14.3-32 32V416c0 17.7 14.3 32 32 32s32-14.3 32-32V96zM256 128c0-17.7-14.3-32-32-32s-32 14.3-32 32V384c0 17.7 14.3 32 32 32s32-14.3 32-32V128zm192 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V352c0 17.7 14.3 32 32 32s32-14.3 32-32V160zM160 224c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32V224zM0 256a32 32 0 1 0 64 0A32 32 0 1 0 0 256zm576 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z"/></svg>
    );
}

export default WaveformLinesIcon;