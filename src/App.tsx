import { FunctionComponent } from 'react';
import { About, Chats, Reviews } from './components';

const App: FunctionComponent = () => {
  return (
    <main className="app">
      <About />
      <Reviews />
      <Chats />
    </main>
  );
};

export default App;
