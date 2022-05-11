import { useState } from 'react';

import { Page } from '../page';
import { Header } from '../header';
import { PromptForm } from '../prompt-form';
import { PromptResult } from '../prompt-result';
import { Footer } from '../footer';
import openAiApi from '../../utils/openAiApi';

export const App = () => {
  const [promptSubmitButtonText, setPromptSubmitButtonText] = useState('Submit');
  const [cards, setCards] = useState([]);

  const handlePrompt = (data) => {
    const openAiRequest = data.prompt;

    setPromptSubmitButtonText('Wait a sec');

    openAiApi
      .sendPrompt(data)
      .then(({ data }) => {
        setCards([
          {
            id: data.id,
            prompt: openAiRequest,
            response: data.choices[0].text
          },
          ...cards]);
      })
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
          cards={cards}
        />
      </Page.Content>
      <Page.Footer>
        <Footer/>
      </Page.Footer>
    </Page>
  );
};

