import React from 'react';

function CirclePIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 128h92c50.8 0 92 41.2 92 92s-41.2 92-92 92H208v48c0 13.3-10.7 24-24 24s-24-10.7-24-24V288 152c0-13.3 10.7-24 24-24zm92 136c24.3 0 44-19.7 44-44s-19.7-44-44-44H208v88h68z"/></svg>
    );
}

export default CirclePIcon;