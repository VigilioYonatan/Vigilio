import React from 'react';

function CircleArrowDownRightIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M256 480a224 224 0 1 1 0-448 224 224 0 1 1 0 448zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM200 352H336c8.8 0 16-7.2 16-16V192c0-8.8-7.2-16-16-16s-16 7.2-16 16V297.4L187.3 164.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L297.4 320H200c-8.8 0-16 7.2-16 16s7.2 16 16 16z"/></svg>
    );
}

export default CircleArrowDownRightIcon;