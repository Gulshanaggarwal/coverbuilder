import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap" rel="stylesheet" crossOrigin="anonymous"></link>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" crossOrigin="anonymous"></link>
                <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" crossOrigin="anonymous"></link>
                <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" crossOrigin="anonymous"></link>
                <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet" crossOrigin="anonymous"></link>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}