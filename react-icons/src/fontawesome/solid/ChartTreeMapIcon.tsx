import React from 'react';

function ChartTreeMapIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M0 80C0 53.5 21.5 32 48 32H176c26.5 0 48 21.5 48 48V192c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80zM0 320c0-26.5 21.5-48 48-48H176c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V320zM304 32H464c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48zM256 240c0-26.5 21.5-48 48-48H464c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V240zm48 112H464c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V400c0-26.5 21.5-48 48-48z"/></svg>
    );
}

export default ChartTreeMapIcon;