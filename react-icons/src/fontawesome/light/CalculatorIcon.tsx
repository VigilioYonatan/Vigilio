import React from 'react';

function CalculatorIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M352 160V448c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V160H352zm0-32H32V64c0-17.7 14.3-32 32-32H320c17.7 0 32 14.3 32 32v64zm32 0V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v64 16 16V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160 144 128zM72 224a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm24 72a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm72-72a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm24 72a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm72-72a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm24 72a24 24 0 1 0 0 48 24 24 0 1 0 0-48zM264 416a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zM80 400c-8.8 0-16 7.2-16 16s7.2 16 16 16H208c8.8 0 16-7.2 16-16s-7.2-16-16-16H80z"/></svg>
    );
}

export default CalculatorIcon;