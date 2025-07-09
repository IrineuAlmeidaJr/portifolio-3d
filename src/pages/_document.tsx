import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Portfólio de Irineu Almeida Júnior, Desenvolvedor Fullstack .NET e Angular" />
        <meta property="og:url" content="https://roinusoftware.com.br"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}