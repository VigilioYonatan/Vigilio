import React from 'react';

function AngleUpIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M212.7 148.7c6.2-6.2 16.4-6.2 22.6 0l160 160c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L224 182.6 75.3 331.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l160-160z"/></svg>
    );
}

export default AngleUpIcon;