import './App.css';
import faisal_img from './img/faisal_img.JPG'
function App() {
  return (
    <>
    <div style={{textAlign: "center"}}>
    <h1 style={{backgroundColor: "Blue",padding:"10px 0",color:"#fff"}}>My React App on Github</h1>
    <h2>Author: Mohd Faisal</h2>
    <img src={faisal_img} width="600px"/>
    </div>
    </>
  );
}

export default App;
