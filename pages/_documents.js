import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@varsoe" />
        <meta name="twitter:title" content="Join the waiting list for varsoe" />
        <meta
          name="twitter:description"
          content="I just joined the waiting list for varsoe. You can too. help us build the product you'd love to use"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dy8si4f7g/image/upload/v1619215867/twitter_ybb0xa.png"
        />
        <meta name="twitter:url" content="https://varsoe.com" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
