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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@varsoe" />
        <meta name="twitter:title" content="Invoices and Payment made very easy." />
        <meta
          name="twitter:description"
          content="Send invoices and get paid from anywhere in the world without
          thinking about it."
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
