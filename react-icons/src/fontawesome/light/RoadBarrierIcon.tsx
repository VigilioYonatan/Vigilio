import React from 'react';

function RoadBarrierIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M16 32c8.8 0 16 7.2 16 16V80H608l0-32c0-8.8 7.2-16 16-16s16 7.2 16 16l0 32v32V272v32l0 160c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-160H32V464c0 8.8-7.2 16-16 16s-16-7.2-16-16V304 272 112 80 48c0-8.8 7.2-16 16-16zM608 272V112H569.9l-80 160H608zM32 272H70.1l80-160H32V272zM406.1 112H313.9l-80 160h92.2l80-160zm35.8 0l-80 160h92.2l80-160H441.9zm-256 0l-80 160h92.2l80-160H185.9z"/></svg>
    );
}

export default RoadBarrierIcon;