import React from 'react';
import { ChatCompletionRequestMessageRoleEnum, Configuration, OpenAIApi } from 'openai';
import './ChatGpt.css';

export const ChatGpt: React.FC = () => {
    const [prompt, setPrompt] = React.useState<string | undefined>('');
    const [response, setResponse] = React.useState<string | undefined>('');
    const configuration = new Configuration({
        apiKey: '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',
    });

    const myOpenAi = new OpenAIApi(configuration);
    const chatGptMessages = [{
        role: ChatCompletionRequestMessageRoleEnum.System,
        content: !!prompt ? prompt : 'Hello',
    }];

    const getOpenAIResponse = async (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        const res = await myOpenAi.createChatCompletion({
            messages: chatGptMessages,
            model: 'gpt-3.5-turbo',
        });
        setResponse(res.data.choices[0].message?.content);
    };

 return (
  <>
   <form onSubmit={getOpenAIResponse}>
   <h3 id="myPrompt">I want a practice problem for...</h3>
    {/* <button type="submit">Submit</button> */}
    <input
     id="chat-input"
     type="text"
     value={prompt}
     onChange={e => setPrompt(e.target.value)}
    />
    <div className="flex ml-20 mr-10 my-8 rounded">
      <div className="flex flex-col h-screen bg-[#D4D4D4] shadow-xl w-50">
        <div className="space-y-3">
          <div className="flex items-center justify-center">
            <h3 className="text-xl font-bold bg-[#AEECEF] flex items-center justify-center w-full p-3 mb-5">
              Topics
            </h3>
          </div>

          {/* Temp. SubBar - Will implement using mapping function for more dynamic use */}
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm px-5">
              { /* ALGEBRA */ }
              <li className="flex flex-col items-center justify-center font-bold">
                <h2>Algebra</h2>
              </li>
              <li className="flex flex-col items-center justify-center ">
                <h1>GCD Of List</h1>
                <hr className="w-[40%] h-0.5 rounded my-2 dark:bg-gray-700"></hr>
              </li>

              { /* CALCULUS */ }
              <li className="flex flex-col items-center justify-center font-bold">
                <h2>Calculus</h2>
              </li>
              <li className="flex flex-col items-center justify-center">
                <hr className="w-[40%] h-0.5 rounded my-2 dark:bg-gray-700"></hr>
              </li>

              { /* NUMBER THEORY */ }
              <li className="flex flex-col items-center justify-center font-bold">
                <h2>Number Theory</h2>
                <hr className="w-[40%] h-0.5 rounded my-2 dark:bg-gray-700"></hr>
              </li>
              <li className="flex flex-col items-center justify-center ">
                <button type="submit">Submit</button>
                <hr className="w-[40%] h-0.5 rounded my-2 dark:bg-gray-700"></hr>
              </li>

              { /* lINEAR ALGEBRA */ }
              <li className="flex flex-col items-center justify-center font-bold">
                <h2>Linear Algebra</h2>
                <hr className="w-[40%] h-0.5 rounded my-2 dark:bg-gray-700"></hr>
              </li>
              <li className="flex flex-col items-center justify-center ">
                <button type="submit">Submit</button>
                <hr className="w-[40%] h-0.5 rounded my-2 dark:bg-gray-700"></hr>
              </li>

              { /* CRYPTOGRAPHY */ }
              <li className="flex flex-col items-center justify-center font-bold">
                <h2>Cryptography</h2>
                <hr className="w-[40%] h-0.5 rounded my-2 dark:bg-gray-700"></hr>
              </li>
              <li className="flex flex-col items-center justify-center ">
                <button type="submit">Submit</button>
                <hr className="w-[40%] h-0.5 rounded my-2 dark:bg-gray-700"></hr>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
   </form>
   {/* If there's no response then don't show the element */}
   {!!response && <div>{response}</div>}
  </>
 );
};