import React from 'react';

function PipeSectionIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M32 112c0-8.8-7.2-16-16-16s-16 7.2-16 16v32V368v32c0 8.8 7.2 16 16 16s16-7.2 16-16V384H608v16c0 8.8 7.2 16 16 16s16-7.2 16-16V368 144 112c0-8.8-7.2-16-16-16s-16 7.2-16 16v16H256 32V112zM608 352H32V160H256 608V352z"/></svg>
    );
}

export default PipeSectionIcon;