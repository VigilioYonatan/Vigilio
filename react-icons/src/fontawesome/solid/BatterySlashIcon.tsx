import React from 'react';

function BatterySlashIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-87.5-68.6C563.1 386 576 362.5 576 336V320c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32V176c0-44.2-35.8-80-80-80H154.8L38.8 5.1zM236.4 160H496c8.8 0 16 7.2 16 16V336c0 8.8-7.2 16-16 16H481.4l-245-192zm88.5 192H112c-8.8 0-16-7.2-16-16V176c0-1.4 .2-2.7 .5-4L45.4 131.7C36.9 144.4 32 159.6 32 176V336c0 44.2 35.8 80 80 80H406.2l-81.2-64z"/></svg>
    );
}

export default BatterySlashIcon;