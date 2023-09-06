import {Html, Head, Main, NextScript} from 'next/document'
import React from "react";

const Document = () => {
    return(
        <Html className={"dark"}>
            <Head>
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}

export default Document;
