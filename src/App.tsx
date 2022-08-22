import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Characters from './components/Characters';
import CharacterDetail from './components/CharacterDetail';
import BaseLayout from './components/layout/BaseLayout';

function App() {
  return (
    <BaseLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/info" element={<CharacterDetail />} />
        </Routes>
      </BrowserRouter>
    </BaseLayout>
  )
}

export default App;
