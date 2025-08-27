import React from 'react';

function RIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M48 32C21.5 32 0 53.5 0 80V272 464c0 8.8 7.2 16 16 16s16-7.2 16-16V288H167.4L290.7 472.9c4.9 7.4 14.8 9.3 22.2 4.4s9.3-14.8 4.4-22.2L205.4 287.3C269.8 280.6 320 226.2 320 160c0-70.7-57.3-128-128-128H48zM176 256H32V80c0-8.8 7.2-16 16-16H192c53 0 96 43 96 96s-43 96-96 96H176z"/></svg>
    );
}

export default RIcon;