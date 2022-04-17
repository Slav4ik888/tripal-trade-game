import './App.css';
import Header from './components/header';
import Slider from './components/slider';
import Text from './components/text';
import Footer from './components/footer';


function App() {

  return (
    <div className="App">
      <Header />
      <Slider />

      <Text className='text1'>
        Text 1
      </Text>
      <Text italic>
        Text 2
      </Text>
      <Text strong>
        Text 3
      </Text>

      <Footer />
    </div>
  );
}

export default App;
// git add . && git commit -m "2 lesson" && git push -u origin master
