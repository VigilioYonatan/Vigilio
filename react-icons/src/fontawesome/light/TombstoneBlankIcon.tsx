import React from 'react';

function TombstoneBlankIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M384 192V448h32V192C416 86 330 0 224 0S32 86 32 192V448H64V192c0-88.4 71.6-160 160-160s160 71.6 160 160zM16 480c-8.8 0-16 7.2-16 16s7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H16z"/></svg>
    );
}

export default TombstoneBlankIcon;