import { Page } from '../page';
import { Header } from '../header';

export const App = () => {
  return (
    <Page>
      <Page.Header>
        <Header/>
      </Page.Header>
      <Page.Content/>
      <Page.Footer/>
    </Page>
  );
};
