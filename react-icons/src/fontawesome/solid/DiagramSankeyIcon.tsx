import React from 'react';

function DiagramSankeyIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M294.4 44.8c6-8.1 15.5-12.8 25.6-12.8H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H336L249.6 211.2c-6 8.1-15.5 12.8-25.6 12.8H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H208L294.4 44.8zM141.9 320H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H216.5l57.6 96H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-11.2 0-21.7-5.9-27.4-15.5L141.9 320z"/></svg>
    );
}

export default DiagramSankeyIcon;