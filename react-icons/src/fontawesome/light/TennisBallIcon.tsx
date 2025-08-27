import React from 'react';

function TennisBallIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M256.6 480c-4.5-58.4 15.6-118.4 60.3-163.1s104.6-64.8 163.1-60.3c0-.2 0-.4 0-.6C480 132.3 379.7 32 256 32c-.2 0-.4 0-.6 0c4.5 58.4-15.6 118.4-60.3 163.1S90.4 259.9 32 255.4c0 .2 0 .4 0 .6c0 123.7 100.3 224 224 224c.2 0 .4 0 .6 0zm31.9-2.3c97.7-14.2 174.9-91.4 189.1-189.1c-49.5-3.8-100.3 13.2-138.1 51s-54.8 88.6-51 138.1zM223.5 34.3C125.8 48.6 48.6 125.8 34.3 223.5c49.5 3.8 100.3-13.2 138.1-51s54.8-88.6 51-138.1zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
    );
}

export default TennisBallIcon;