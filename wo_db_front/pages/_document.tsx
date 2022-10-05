import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import React from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      if (process.env.NODE_ENV === "production") {
        ctx.renderPage = () =>
          originalRenderPage({
            enhanceApp: (App) => (props) =>
              sheet.collectStyles(() =>
                renderToString(
                  <StyleSheetManager sheet={sheet.instance}>
                    <App {...props} />
                  </StyleSheetManager>
                )
              ),
          });
      } else {
        // eslint-disable-next-line react/display-name
        ctx.renderPage = () =>
          originalRenderPage({
            enhanceApp: (App) => (props) =>
              sheet.collectStyles(<App {...props} />),
          });
      }
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } catch (error) {
      console.log(`error rendering _document`, error);
    } finally {
      sheet.seal();
    }
  }
  redirectIEToEdge = () => {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `if(navigator.userAgent.match(/MSIE|Internet Explorer|Trident/i)) {
          window.location = 'microsoft-edge:' + 'https://www.iwedding.co.kr/main/index';
        }`,
        }}
      ></script>
    );
  };
  render() {
    return (
      <Html>
        <Head />
        {this.redirectIEToEdge()}
        <body>
          <Main />
          <div id="modal-root"></div>
          <NextScript />
          <script src="https://pay.kcp.co.kr/plugin/payplus_web.jsp" />
          <script src="https://developers.kakao.com/sdk/js/kakao.min.js" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
