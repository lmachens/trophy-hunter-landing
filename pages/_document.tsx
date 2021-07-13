import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Spice up your League of Legends experience with an epic journey full of fun challenges and trophies to unlock"
          />
          <meta
            property="og:title"
            content="Trophy Hunter for League of Legends- Up for a challenge?"
          />
          <meta property="og:url" content="https://th.gl/" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Spice up your League of Legends experience with an epic journey full of fun challenges and trophies to unlock"
          />
          <meta property="og:image" content="/assets/tile.jpg" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
