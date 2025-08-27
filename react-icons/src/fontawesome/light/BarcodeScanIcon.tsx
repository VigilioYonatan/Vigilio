import React from 'react';

function BarcodeScanIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M64 48V192H96V48c0-8.8-7.2-16-16-16s-16 7.2-16 16zm0 416c0 8.8 7.2 16 16 16s16-7.2 16-16V320H64V464zm96 0V320H128V464c0 8.8 7.2 16 16 16s16-7.2 16-16zM128 48V192h32V48c0-8.8-7.2-16-16-16s-16 7.2-16 16zm64 416c0 8.8 7.2 16 16 16s16-7.2 16-16V320H192V464zm0-416V192h32V48c0-8.8-7.2-16-16-16s-16 7.2-16 16zm96 416c0 8.8 7.2 16 16 16s16-7.2 16-16V320H288V464zm0-416V192h32V48c0-8.8-7.2-16-16-16s-16 7.2-16 16zm64 416c0 8.8 7.2 16 16 16s16-7.2 16-16V320H352V464zm0-416V192h32V48c0-8.8-7.2-16-16-16s-16 7.2-16 16zm96 416c0 8.8 7.2 16 16 16s16-7.2 16-16V320H448V464zm0-416V192h32V48c0-8.8-7.2-16-16-16s-16 7.2-16 16zm96 416c0 8.8 7.2 16 16 16s16-7.2 16-16V320H544V464zm0-416V192h32V48c0-8.8-7.2-16-16-16s-16 7.2-16 16zM0 256c0 8.8 7.2 16 16 16l608 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L16 240c-8.8 0-16 7.2-16 16z"/></svg>
    );
}

export default BarcodeScanIcon;