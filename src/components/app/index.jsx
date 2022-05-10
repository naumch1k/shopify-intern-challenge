import { Page } from '../page';
import { Header } from '../header';
import { Footer } from '../footer';

export const App = () => {
  return (
    <Page>
      <Page.Header>
        <Header/>
      </Page.Header>
      <Page.Content/>
      <Page.Footer>
        <Footer/>
      </Page.Footer>
    </Page>
  );
};
