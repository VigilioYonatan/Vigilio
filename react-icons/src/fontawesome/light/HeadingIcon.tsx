import React from 'react';

function HeadingIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M0 48c0-8.8 7.2-16 16-16H80h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H96V224H352V64H304c-8.8 0-16-7.2-16-16s7.2-16 16-16h64 64c8.8 0 16 7.2 16 16s-7.2 16-16 16H384V240 448h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H304c-8.8 0-16-7.2-16-16s7.2-16 16-16h48V256H96V448h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16H64V240 64H16C7.2 64 0 56.8 0 48z"/></svg>
    );
}

export default HeadingIcon;