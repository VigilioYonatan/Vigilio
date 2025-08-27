import React from 'react';

function PipeValveIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M288 64c0-17.7-14.3-32-32-32s-32 14.3-32 32V76L128 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l128-16 128 16c17.7 0 32-14.3 32-32s-14.3-32-32-32L288 76V64zm0 84.2l-32-4-32 4V192H96V448H416V192H288V148.2zM32 160c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32s32-14.3 32-32V192c0-17.7-14.3-32-32-32zm480 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V448c0 17.7 14.3 32 32 32s32-14.3 32-32V192z"/></svg>
    );
}

export default PipeValveIcon;