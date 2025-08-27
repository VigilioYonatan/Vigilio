import React from 'react';

function CrateEmptyIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M480 384v72c0 13.3-10.7 24-24 24H56c-13.3 0-24-10.7-24-24V384H480zm0-32H32V280c0-13.3 10.7-24 24-24H456c13.3 0 24 10.7 24 24v72zm32 0V280c0-30.9-25.1-56-56-56H56c-30.9 0-56 25.1-56 56v72 16 16 72c0 30.9 25.1 56 56 56H456c30.9 0 56-25.1 56-56V384 368 352zM96 304a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm336 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM96 432a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm336 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"/></svg>
    );
}

export default CrateEmptyIcon;