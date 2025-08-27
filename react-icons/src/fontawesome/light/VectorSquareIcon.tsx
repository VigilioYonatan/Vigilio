import React from 'react';

function VectorSquareIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M408 64c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8V72c0-4.4 3.6-8 8-8h48zM360 32c-22.1 0-40 17.9-40 40v8H128V72c0-22.1-17.9-40-40-40H40C17.9 32 0 49.9 0 72v48c0 22.1 17.9 40 40 40h8l0 192H40c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40H88c22.1 0 40-17.9 40-40v-8H320v8c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V392c0-22.1-17.9-40-40-40h-8V160h8c22.1 0 40-17.9 40-40V72c0-22.1-17.9-40-40-40H360zM80 352l0-192h8c22.1 0 40-17.9 40-40v-8H320v8c0 22.1 17.9 40 40 40h8V352h-8c-22.1 0-40 17.9-40 40v8H128v-8c0-22.1-17.9-40-40-40H80zM40 384H88c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H40c-4.4 0-8-3.6-8-8V392c0-4.4 3.6-8 8-8zm320 0h48c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8V392c0-4.4 3.6-8 8-8zM40 64H88c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H40c-4.4 0-8-3.6-8-8V72c0-4.4 3.6-8 8-8z"/></svg>
    );
}

export default VectorSquareIcon;