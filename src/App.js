import React,{useState,useEffect,useMemo} from 'react';
import './App.css';


function App() {

  const [ Datetime, setDate] = useState()
  const [value, setValue] = useState(new Date())
  const [time, setTime] = useState()
  const[times,setTimes] = useState()
  let z = new Date()
   const [input,setInput]=useState("")


  useEffect(() => {
    let countDown =new Date( value).getTime()
    let x = setInterval(function(){
       let now = new Date().getTime()
      
      let distance = countDown - now;
  
      let days = Math.floor(distance/(1000*60*60*24))
      let hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60))
      let minutes = Math.floor((distance % (1000 * 60 * 60))/(1000 * 60))
      let seconds = Math.floor((distance % (1000 * 60)) / 1000)
  
      setTime(days + " "+"day" +" "+ hours+" " +"hour"+" "+ minutes+" " +"minute" +" "+ seconds +" "+ "sec")
  
  
      if(distance < 0){
        clearInterval(x)
      }
    }, 1000)
  }, [value])

  useEffect(() => {
    let y = setInterval(function(){
      let now = new Date().getTime() 
     let distance =  now-Datetime; 
     let days = Math.floor(distance/(1000*60*60*24))
     let hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60))
     let minutes = Math.floor((distance % (1000 * 60 * 60))/(1000 * 60))
     let seconds = Math.floor((distance % (1000 * 60)) / 1000)

     setTimes(days + " "+"day" +" "+ hours+" " +"hour"+" "+ minutes+" " +"minute" +" "+ seconds +" "+ "sec"+" ")
     if(distance = 0){
      clearInterval(y);
    }
     
   }, 1000)
    
  }, [z])
  


  const Datetimebtn =(e)=>{
    e.preventDefault()
    const Datetimes = new Date()
    setDate(Datetimes)
    if(input == null){
      alert("plz fill")
    }else{
      setValue(input)
    }
  }


  return (
    <div className="App">
     
       <p>You Have "{time}" Left</p>
       <p>you have created this "{times}" ago</p>
       <input type="text" name="name" placeholder="format -:jun 09, 2021 10:00:00" value ={input } onChange={(e)=>setInput(e.target.value)}/>
       <button onClick={Datetimebtn}>click</button>
    </div>
  );
}

export default App;
