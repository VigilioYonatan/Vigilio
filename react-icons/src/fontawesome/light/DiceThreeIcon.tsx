import React from 'react';

function DiceThreeIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M64 64C46.3 64 32 78.3 32 96V416c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm128 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm72 120a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm120 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
    );
}

export default DiceThreeIcon;