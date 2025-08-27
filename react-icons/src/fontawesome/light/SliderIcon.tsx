import React from 'react';

function SliderIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M352 128c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H320c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h32zM320 96c-35.3 0-64 28.7-64 64V352c0 35.3 28.7 64 64 64h32c35.3 0 64-28.7 64-64V272h80c8.8 0 16-7.2 16-16s-7.2-16-16-16H416V160c0-35.3-28.7-64-64-64H320zM0 256c0 8.8 7.2 16 16 16H224V240H16c-8.8 0-16 7.2-16 16z"/></svg>
    );
}

export default SliderIcon;