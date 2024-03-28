import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<h2 className="font-black uppercase">hello</h2>} />
    </Routes>
  );
};

export default App;
