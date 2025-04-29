import { Routes, Route } from 'react-router-dom';
import TeaSubscriptionContainer from './TeaSubscriptionContainer';
import TeaSubscriptionDetails from './TeaSubscriptionDetails';

import './App.css'

function App() {
  return (
    <div className="App">
      <h1>🫖 The Koala Tea Control Admin View 🫖</h1>

      <Routes>
        < Route path="/subscriptions" element={<TeaSubscriptionContainer />} />
        < Route path="/subscriptions/:id" element={<TeaSubscriptionDetails/>} />
      </Routes>
    </div>
  )
}

export default App
