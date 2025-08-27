import React from 'react';

function TrowelIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M491.8 20.2c26.9 26.9 26.9 70.5 0 97.5l-95.4 95.4c-14.6 14.6-38.2 14.6-52.8 0l-11-11-102 102 75.5 75.5c12.6 12.6 7.5 34.1-9.4 39.7L36.2 506.1C17.5 512.4-.4 494.5 5.9 475.8L92.7 215.2c5.6-16.9 27.1-22 39.7-9.4L208 281.4l102-102-11-11c-14.6-14.6-14.6-38.2 0-52.8l95.4-95.4c26.9-26.9 70.5-26.9 97.5 0zM321.6 138.2c-2.1 2.1-2.1 5.5 0 7.5l44.7 44.7c2.1 2.1 5.5 2.1 7.5 0L469.2 95c14.4-14.4 14.4-37.8 0-52.2s-37.8-14.4-52.2 0l-95.4 95.4zM41.3 470.7L274.4 393 119 237.6 41.3 470.7z"/></svg>
    );
}

export default TrowelIcon;