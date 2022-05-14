import { useState, useEffect } from 'react';

import { Page } from '../page';
import { Header } from '../header';
import { PromptSection } from '../prompt-section';
import { SearchResultSection } from '../search-result-section';
import { Footer } from '../footer';
import { Popup } from '../popup';
import openAiApi from '../../utils/openAiApi';

import { promptFormErrorMessages } from '../../shared/constants/prompt-form-error-messages';
import { DEFAULT_ERROR_MESSAGE } from '../../shared/constants/default-error-message';

export const App = () => {
  const [promptSubmitButtonText, setPromptSubmitButtonText] = useState('Submit');
  const [cards, setCards] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  useEffect(() => {
    const localSavedSearches = localStorage.getItem('savedSearches');

    if (localSavedSearches) {
      setCards(JSON.parse(localSavedSearches));
    }
  }, []);

  const handlePrompt = (data) => {
    const openAiRequest = data.prompt;

    setPromptSubmitButtonText('Wait a sec');

    openAiApi
      .sendPrompt(data)
      .then(({ data }) => {
        localStorage.setItem('savedSearches', JSON.stringify([
          {
            id: data.id,
            prompt: openAiRequest,
            response: data.choices[0].text
          },
          ...cards]

        ));
        setCards([
          {
            id: data.id,
            prompt: openAiRequest,
            response: data.choices[0].text
          },
          ...cards]);
      })
      .catch((err) => {
        switch (err) {
        case 400:
          setPopupMessage(promptFormErrorMessages.BAD_REQUEST);
          break;
        case 401:
          setPopupMessage(promptFormErrorMessages.UNAUTHORIZED);
          break;
        default:
          setPopupMessage(DEFAULT_ERROR_MESSAGE);
        }
      })
      .finally(() => {
        setPromptSubmitButtonText('Submit');
      });
  };

  const handleClearList = () => {
    localStorage.clear();
    setCards([]);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    if (popupMessage) {
      setIsPopupOpen(true);
    }
  }, [popupMessage]);

  return (
    <>
      <Page>
        <Page.Header>
          <Header/>
        </Page.Header>
        <Page.Content>
          <PromptSection
            submitButtonText={promptSubmitButtonText}
            onPrompt={handlePrompt}
          />
          <SearchResultSection
            cards={cards}
            onClearList={handleClearList}
          />
        </Page.Content>
        <Page.Footer>
          <Footer/>
        </Page.Footer>
      </Page>
      <Popup
        isOpen={isPopupOpen}
        message={popupMessage}
        onClose={closePopup}
      />
    </>

  );
};

