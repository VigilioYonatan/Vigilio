import React from 'react';

function PipeValveIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M272 32c0-8.8-7.2-16-16-16s-16 7.2-16 16V80H144c-8.8 0-16 7.2-16 16s7.2 16 16 16h96v80H32V176c0-8.8-7.2-16-16-16s-16 7.2-16 16v32V432v32c0 8.8 7.2 16 16 16s16-7.2 16-16V448H480v16c0 8.8 7.2 16 16 16s16-7.2 16-16V432 208 176c0-8.8-7.2-16-16-16s-16 7.2-16 16v16H272V112h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H272V32zM256 224H480V416H32V224H256z"/></svg>
    );
}

export default PipeValveIcon;