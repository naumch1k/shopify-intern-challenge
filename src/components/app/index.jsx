import { Page } from '../page';
import { Header } from '../header';
import { PromptForm } from '../prompt-form';
import { Footer } from '../footer';

export const App = () => {
  return (
    <Page>
      <Page.Header>
        <Header/>
      </Page.Header>
      <Page.Content>
        <PromptForm/>
      </Page.Content>
      <Page.Footer>
        <Footer/>
      </Page.Footer>
    </Page>
  );
};
