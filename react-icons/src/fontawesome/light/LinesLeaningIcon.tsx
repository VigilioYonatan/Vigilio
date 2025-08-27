import React from 'react';

function LinesLeaningIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M190.9 53.7c3.2-8.2-.9-17.5-9.2-20.7s-17.5 .9-20.7 9.2l-160 416c-3.2 8.2 .9 17.5 9.2 20.7s17.5-.9 20.7-9.2l160-416zm84.7-21.3c-8.6-2-17.2 3.4-19.2 12l-96 416c-2 8.6 3.4 17.2 12 19.2s17.2-3.4 19.2-12l96-416c2-8.6-3.4-17.2-12-19.2zM368 32c-8.8 0-16 7.2-16 16V464c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16z"/></svg>
    );
}

export default LinesLeaningIcon;