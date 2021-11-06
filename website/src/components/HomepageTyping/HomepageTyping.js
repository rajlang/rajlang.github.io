import React from "react";
import TypeIt from "typeit-react";

const code =
    [<>
        <span
            className="token keyword"
            style={{ color: "rgb(189, 147, 249)", fontStyle: "italic" }}>
            fn
        </span>
        <span className="token plain"> </span>
        <span className="token function" style={{ color: "rgb(80, 250, 123)" }}>
            main
        </span>
        <span
            className="token punctuation"
            style={{ color: "rgb(248, 248, 242)" }}>
            (
        </span>
        <span
            className="token punctuation"
            style={{ color: "rgb(248, 248, 242)" }}>
            )
        </span>
        <span className="token plain"> </span>
        <span
            className="token punctuation"
            style={{ color: "rgb(248, 248, 242)" }}>
            {"{"}
        </span>
        <span className="token plain" />
        <span>{`
`}</span>
    </>,
    <>
        <span className="token plain" />
        <span
            className="token keyword"
            style={{ color: "rgb(189, 147, 249)", fontStyle: "italic" }}>   let
        </span>
        <span className="token plain"> king </span>
        <span className="token operator">=</span>
        <span className="token plain"> </span>
        <span className="token string" style={{ color: "rgb(255, 121, 198)" }}>
            "🤴"
        </span>
        <span
            className="token punctuation"
            style={{ color: "rgb(248, 248, 242)" }}>
            ;
        </span>
        <span className="token plain" />
        <span>{`
`}</span>
    </>,
    <>
        <span className="token plain" />
        <span
            className="token keyword"
            style={{ color: "rgb(189, 147, 249)", fontStyle: "italic" }}>   return
        </span>
        <span className="token plain"> king</span>
        <span
            className="token punctuation"
            style={{ color: "rgb(248, 248, 242)" }}>
            ;
        </span>
        <span className="token plain" />
        <span>{`
`}</span>
    </>,
    <>
        <span className="token plain" />
        <span
            className="token punctuation"
            style={{ color: "rgb(248, 248, 242)" }}>
            {"}"}
        </span>
        <span className="token plain" />
        <span>{`
`}</span>
    </>,
    <>
        <span className="token plain" style={{ display: "inline-block" }} />
        <span>{`
`}</span>
    </>,
    <>
        <span className="token plain" />
        <span className="token function" style={{ color: "rgb(80, 250, 123)" }}>
            println
        </span>
        <span
            className="token punctuation"
            style={{ color: "rgb(248, 248, 242)" }}>
            (
        </span>
        <span className="token function" style={{ color: "rgb(80, 250, 123)" }}>
            main
        </span>
        <span
            className="token punctuation"
            style={{ color: "rgb(248, 248, 242)" }}>
            (
        </span>
        <span
            className="token punctuation"
            style={{ color: "rgb(248, 248, 242)" }}>
            )
        </span>
        <span
            className="token punctuation"
            style={{ color: "rgb(248, 248, 242)" }}>
            )
        </span>
        <span
            className="token punctuation"
            style={{ color: "rgb(248, 248, 242)" }}>
            ;
        </span>
        <span className="token plain" />
        <span>{`
`}</span>
    </>,
    <>
        <span className="token plain" />
        <span className="token comment" style={{ color: "rgb(98, 114, 164)" }}>
            // Prints 🤴 in the console
        </span>
        <span>{`
`}</span>
    </>]

export default function HomepageTyping() {
    return (
        <>
            <div className="codeBlockContainer_node_modules-@docusaurus-theme-classic-lib-next-theme-CodeBlock-styles-module">
                <div className="codeBlockContent_node_modules-@docusaurus-theme-classic-lib-next-theme-CodeBlock-styles-module raj">
                    <pre
                        tabIndex={0}
                        className="prism-code language-raj codeBlock_node_modules-@docusaurus-theme-classic-lib-next-theme-CodeBlock-styles-module thin-scrollbar"
                        style={{
                            color: "rgb(248, 248, 242)",
                            backgroundColor: "rgb(40, 42, 54)",
                        }}
                    >
                        <code className="codeBlockLines_node_modules-@docusaurus-theme-classic-lib-next-theme-CodeBlock-styles-module">
                            <TypeIt
                                options={{
                                    speed: 100,
                                    waitUntilVisible: true,
                                    loop: true,
                                    lifeLike: false,
                                }}
                            >
                                {code.map((line, idx) => (
                                    <span key={idx} className="token-line" style={{ color: "rgb(248, 248, 242)" }}>{line}</span>
                                ), this)}
                            </TypeIt>
                        </code>
                    </pre>
                </div>
            </div>

        </>
    )
}