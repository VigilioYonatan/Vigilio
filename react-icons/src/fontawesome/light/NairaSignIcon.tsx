import React from 'react';

function NairaSignIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M93.2 38.9c-4-5.8-11.2-8.3-17.9-6.2S64 41 64 48V256H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64V464c0 8.8 7.2 16 16 16s16-7.2 16-16V288H226.7L354.8 473.1c4 5.8 11.2 8.3 17.9 6.2s11.2-8.3 11.2-15.3V288h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384V48c0-8.8-7.2-16-16-16s-16 7.2-16 16V256H243.5L93.2 38.9zM265.6 288H352V412.8L265.6 288zm-61.1-32H96V99.2L204.5 256z"/></svg>
    );
}

export default NairaSignIcon;