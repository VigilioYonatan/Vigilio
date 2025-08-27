import React from 'react';

function LineColumnsIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M16 48C7.2 48 0 55.2 0 64s7.2 16 16 16H208c8.8 0 16-7.2 16-16s-7.2-16-16-16H16zm0 128c-8.8 0-16 7.2-16 16s7.2 16 16 16H208c8.8 0 16-7.2 16-16s-7.2-16-16-16H16zM0 320c0 8.8 7.2 16 16 16H208c8.8 0 16-7.2 16-16s-7.2-16-16-16H16c-8.8 0-16 7.2-16 16zM16 432c-8.8 0-16 7.2-16 16s7.2 16 16 16H208c8.8 0 16-7.2 16-16s-7.2-16-16-16H16zM288 192c0 8.8 7.2 16 16 16H496c8.8 0 16-7.2 16-16s-7.2-16-16-16H304c-8.8 0-16 7.2-16 16zM304 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H496c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zM288 320c0 8.8 7.2 16 16 16H496c8.8 0 16-7.2 16-16s-7.2-16-16-16H304c-8.8 0-16 7.2-16 16zm16 112c-8.8 0-16 7.2-16 16s7.2 16 16 16H496c8.8 0 16-7.2 16-16s-7.2-16-16-16H304z"/></svg>
    );
}

export default LineColumnsIcon;