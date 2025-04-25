function Loader() {
    return (
        <>
            <span class="vigilio-loader"></span>
            <style jsx>{`
                .vigilio-loader {
                    width: 38px;
                    height: 38px;
                    border-radius: 50%;
                    position: relative;
                    animation: vigilio-rotate 1s linear infinite;
                }
                .vigilio-loader::before {
                    content: "";
                    box-sizing: border-box;
                    position: absolute;
                    inset: 0px;
                    border-radius: 50%;
                    border: 5px solid var(--vigilio-primary);
                    animation: vigilio-prixClipFix 2s linear infinite;
                }

                @keyframes vigilio-rotate {
                    100% {
                        transform: rotate(360deg);
                    }
                }

                @keyframes vigilio-prixClipFix {
                    0% {
                        clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
                    }
                    25% {
                        clip-path: polygon(
                            50% 50%,
                            0 0,
                            100% 0,
                            100% 0,
                            100% 0,
                            100% 0
                        );
                    }
                    50% {
                        clip-path: polygon(
                            50% 50%,
                            0 0,
                            100% 0,
                            100% 100%,
                            100% 100%,
                            100% 100%
                        );
                    }
                    75% {
                        clip-path: polygon(
                            50% 50%,
                            0 0,
                            100% 0,
                            100% 100%,
                            0 100%,
                            0 100%
                        );
                    }
                    100% {
                        clip-path: polygon(
                            50% 50%,
                            0 0,
                            100% 0,
                            100% 100%,
                            0 100%,
                            0 0
                        );
                    }
                }
            `}</style>
        </>
    );
}

export default Loader;
