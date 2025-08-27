import React from 'react';

function ComputerMouseScrollwheelIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M160 0C71.6 0 0 71.6 0 160V352c0 88.4 71.6 160 160 160h64c88.4 0 160-71.6 160-160V160C384 71.6 312.4 0 224 0H160zm64 128v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V128c0-17.7 14.3-32 32-32s32 14.3 32 32z"/></svg>
    );
}

export default ComputerMouseScrollwheelIcon;