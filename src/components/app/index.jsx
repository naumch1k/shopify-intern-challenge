import { useState } from 'react';

import { Page } from '../page';
import { Header } from '../header';
import { PromptForm } from '../prompt-form';
import { PromptResult } from '../prompt-result';
import { Footer } from '../footer';
import openAiApi from '../../utils/openAiApi';

import data from '../../mocks/cards-data.json';

export const App = () => {
  const [promptSubmitButtonText, setPromptSubmitButtonText] = useState('Submit');

  const handlePrompt = (data) => {
    setPromptSubmitButtonText('Wait a sec');

    openAiApi
      .sendPrompt(data)
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      })
      .finally(() => {
        setPromptSubmitButtonText('Submit');
      });
  };

  return (
    <Page>
      <Page.Header>
        <Header/>
      </Page.Header>
      <Page.Content>
        <PromptForm
          submitButtonText={promptSubmitButtonText}
          onPrompt={handlePrompt}
        />
        <PromptResult
          data={data}
        />
      </Page.Content>
      <Page.Footer>
        <Footer/>
      </Page.Footer>
    </Page>
  );
};

