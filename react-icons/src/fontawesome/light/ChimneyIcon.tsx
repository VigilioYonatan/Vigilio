import React from 'react';

function ChimneyIcon(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        <svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    {...props}>
                    {props.title ? <title>{props.title}</title> : <title> </title>}<path d="M32 64H416v64H400 176 48 32V64zm0 96l0 112V400v64c0 8.8 7.2 16 16 16s16-7.2 16-16V416h96v48c0 8.8 7.2 16 16 16s16-7.2 16-16V416h80H384v48c0 8.8 7.2 16 16 16s16-7.2 16-16V400 272 160c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64v64c0 17.7 14.3 32 32 32zm352 0v96H272 192V160H384zm-224 0v96H64V160h96zm16 224H64V288H176h80v96H176zm112 0V288h96v96H288z"/></svg>
    );
}

export default ChimneyIcon;