import '../src/App.css';
import ProfilePhoto from './component/profile/ProfilePhoto'
import Name from './component/profile/FullName';
import Add from './component/profile/Address';

function App() {
  return (

    <div className="container">
      <ProfilePhoto/>
      <Name/>
      <Add/>
    </div>
    
    
  );
}

export default App;
