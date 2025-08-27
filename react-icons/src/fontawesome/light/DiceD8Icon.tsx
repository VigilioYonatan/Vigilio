import React from 'react';

function DiceD8Icon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M240 51.3L44.3 247.1l195.7 81V51.3zM72.8 293.5L240 460.7v-98L72.8 293.5zM272 460.7L439.2 293.5 272 362.7v98zM467.8 247.1L272 51.3V328.1l195.8-81zM239 7c9.4-9.4 24.6-9.4 33.9 0L505 239c9.4 9.4 9.4 24.6 0 33.9L273 505c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L239 7z"/></svg>
    );
}

export default DiceD8Icon;