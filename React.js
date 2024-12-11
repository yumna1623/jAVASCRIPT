// ----------------------------------------------------FRGMENTS---------------------------------------------------
function video()
{
  return(
    // <>
    <img>
    <div></div>
     // </> these use when we have 2 objects side a by side so they need a parent
  )  
}

-------------------------------------------------HOW TO EXPORT TWO COMPONENTS AT A TIME------------------------
Components.js
const ComponentA = () => {
  return <h1>Component A</h1>;
};
const ComponentB = () => {
  return <h2>Component B </h2>;
};
const DefaultComponent = () => {
  return <h3>Default Component </h3>;
};
export  { ComponentA, ComponentB, DefaultComponent };

---------------------------------------------------HOW TO EXPORT TWO COMPONENTS AT A TIME-------------------------------------
HOW TO EXPORT TWO COMPONENTS AT A TIME
// App.js
import { ComponentA, ComponentB, DefaultComponent } from './Components';

function App() {
  return (
    <div>
      <ComponentA />
      <ComponentB />
      <DefaultComponent />
    </div>
  );
}
export default App;

----------------------------------------HARD QUOTED VALUES TO VARIABLE VALUES/PROPS------------------------------------------------------------------
import './Video.css'; 
// THIS IS VERY TO IMPRTANT TO IMPORT THAT CSS THAT CONTAIS THAT bg CLASS 

// you can use the same video component again and again but if you want changes i any one 
// of then then you have to pass the attributes
function Video({title,bgColor}) {
    
    let bg = 'Dark'
  //THEN IN CSS DEFINE bg CLASS
  return (
    <>
      <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />
      <div className={bg} style={{backgroundColor:bgColor}}>{title} tutorial</div>
      </> 
  //fragments
  );
}
export default Video;
------------------------
  import video from './components/video'
  function App()
{
  return(
    <>
    <video bgColor = "red" title = "React Js Tutorial "></video>
    <video bgColor = "green" title = "Node Js Tutorial "></video>
   
    </>
  )
}
-------------------------------------------------------------------------------------------------------------------------------
import './PlayButton.css';

function PlayButton({message,children}) {
    function handleClick(){
        console.log(message);
        
    }
    return (
        <button
            type="button"
            className="btn btn-warning custom-hover"
            onClick={handleClick}>{children}</button>
    );
}
export default PlayButton;
// ------------------
<div>    
       <PlayButton  message=" hi play">play</PlayButton>      
       <PlayButton  message="  pause ">pause</PlayButton>      
</div>
// ------------------
  import './Video.css';
function Video({title,channel="yumna",views,time,verified,children}) {    
  return (
    <>
    <div className='container'>
    <div className='pic'>
      <img src="https://th.bing.com/th/id/R.0a94687daa63e00e0ed5856b0d64a929?rik=5lNY3n6PQqL4ew&pid=ImgRaw&r=0" alt="Katherine Johnson" />
      <div className='title'> {title} </div>
      <div className='channel'> {channel} {verified? '✅':null} </div>
      <div className='views'> {views} views <span>.</span>{time}</div>
      </div>
      <div>
      {children}
        </div>
    </div>
      </>
  );
}
export default Video;
---------------------------------------------------------------------------------------------------------------------------------
import Video from "./components/Video";
import "./App.css";
import videos from "./data/thumbnail";
import PlayButton from "./components/PlayButton";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
        >
          <PlayButton
            onPlay={() => console.log("play",video.title)}
            onPause={() => console.log("pause",video.title)} >
            {video.title}
          </PlayButton>
        </Video>
      ))}
    <Counter></Counter>
    </div>
  );
}
export default App;
------------------
import './PlayButton.css';
function PlayButton({children,onPause,onPlay}) {
    let playing = false;
    function handleClick(e){
        if(playing){
            onPause()
        }
        else{
          onPlay();
        }
        playing = !playing
    }
    return (
        <button
            type="button"
            className="btn btn-warning custom-hover"
            onClick={handleClick}>{children}</button>
    );
}

export default PlayButton;

-------------------------------------------------------STATE UNSTATE / HOOKS-------------------------------------------------
import { useState } from "react";
function Counter() {
    const [number,setNumber] = useState(0);
    function handleClick(e) {
        e.stopPropagation();
        setTimeout(()=>{
            setNumber(number=>number+1); 
        },2000)
        console.log(number);
    }
    return(
        <>
        <h1 style={{color : 'white'}}>{number}</h1>
        <button onClick={handleClick}>Add</button>
        </>
    )
}
------------------------
export default Counter;
------------------------
  import { useState } from 'react';
import './PlayButton.css';
function PlayButton({children,onPause,onPlay}) {
    const [playing,setPlaying] = useState(false);
    function handleClick(e){
        if(playing){
            onPause()
        }
        else{
            onPlay();
        }
         setPlaying(!playing);
    }
    return (
        <button
            type="button"
            className="btn btn-warning custom-hover"
            onClick={handleClick}> {children} : {playing? '⏯' : '⏸'} </button>
    );
}
----------------
export default PlayButton;
----------------
  import Video from "./components/Video";
import "./App.css";
import videos from "./data/thumbnail";
import PlayButton from "./components/PlayButton";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
        >
          <PlayButton
            onPlay={() => console.log("play",video.title)}
            onPause={() => console.log("pause",video.title)} >
            {video.title}
          </PlayButton>
        </Video>
      ))}
    <Counter></Counter>
    </div>
  );
}
export default App;
----------------------------------------------------------------USESTATE------------------------------------------------------------------------------
import Video from "./components/Video";
import "./App.css";
import videoDB from "./data/thumbnail";
import PlayButton from "./components/PlayButton";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
    const [videos,setVideos] = useState(videoDB)
  return (
    <div className="App">
        <div>
            <button onClick={()=>{
                setVideos([...videos,{
                    title:" MOngoDB Tutorial",
                    views:"100k",
                    time:"1 month ago ",
                    channel:"lemon Smasher ",
                    verified: false               
                 }]);
            }}>Add Video</button>
        </div>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
        >
          <PlayButton
            onPlay={() => console.log("play",video.title)}
            onPause={() => console.log("pause",video.title)} >
            {video.title}
          </PlayButton>
        </Video>
      ))}
    <Counter></Counter>
    </div>
  );
}
export default App;
------------------
-----------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------

-----------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------


