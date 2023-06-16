import './App.css';
import BioData from './components/BioData';

const App = () => {
  return (
    <div className="App" >
      <BioData
        name="Don Yeamin"
        email="yeaminr07@gmail.com"
        linkedIn="linkedIn/wbsy"
        mobile="01648798079"
        github="https://github.com/yeamin07"
        twitter="twitter/wbsy"
        skills={['HTML', 'CSS', 'JavaScript', 'React']}
        interests={['Artificial Intelligence', 'Robotics', 'Machine Learning', 'Software Engineering']}
      />
      <hr />
      <BioData
        name="Habib programmer"
        email="habib101@gmail.com"
        linkedIn="linkedIn/habib"
        mobile="01648652469"
        github="https://github.com/habibdeveloper12"
        twitter="twitter/habib"
        skills={['JavaScript', 'React', 'Nodejs', 'MongoBD']}
        interests={['101', 'Whisky', 'Cigarette']}
      />
    </div>
  )
}

export default App;