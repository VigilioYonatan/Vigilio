import React from 'react';

function BorderNoneIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M32 424a24 24 0 1 0 0 48 24 24 0 1 0 0-48zM128 88a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0 384a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0-240a24 24 0 1 0 0 48 24 24 0 1 0 0-48zM320 472a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0-432a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm0 240a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM224 424a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm0-336a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0 144a24 24 0 1 0 0 48 24 24 0 1 0 0-48zM416 472a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0-384a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM32 40a24 24 0 1 0 0 48 24 24 0 1 0 0-48zM416 280a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM32 232a24 24 0 1 0 0 48 24 24 0 1 0 0-48zM224 376a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm192-48a24 24 0 1 0 0 48 24 24 0 1 0 0-48zM32 376a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM416 136a24 24 0 1 0 0 48 24 24 0 1 0 0-48zM32 184a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm192-48a24 24 0 1 0 0 48 24 24 0 1 0 0-48z"/></svg>
    );
}

export default BorderNoneIcon;