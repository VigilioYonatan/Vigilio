import React from 'react';

function TrafficConeIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M248.2 32h15.5c3.3 0 6.2 2 7.4 5l49.2 123H191.6L240.8 37c1.2-3 4.2-5 7.4-5zm84.9 160l51.2 128H127.6l51.2-128H333.2zm64 160l51.2 128H63.6l51.2-128H397.2zM211.1 25.1L29.2 480H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H496c8.8 0 16-7.2 16-16s-7.2-16-16-16H482.8L300.9 25.1C294.8 10 280.1 0 263.8 0H248.2c-16.4 0-31.1 10-37.1 25.1z"/></svg>
    );
}

export default TrafficConeIcon;