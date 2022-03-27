import logo from './logo.svg';
import './App.css';
import Temp from './components/Temp';
      
    
function App() {
  var today = new Date(),

    time = today.getHours() ;
    var classn="";
    var cbox="";
    if(time>=5&&time<=16){
      classn="day";
      cbox="box";
    }
          
          if(time>=17&&time<=20){
            classn="even"
            cbox="ebox"
          }
          if (time >= 21 || (time >= 0 && time < 5)){
            classn="night"
            cbox="nbox";
          }
  return (
    
    <div className={classn}>
     
     <Temp cls={cbox}/>
    </div>
  );
}

export default App;
