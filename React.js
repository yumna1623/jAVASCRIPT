// ----------------------------------------------------FRGMENTS---------------------------------------------------
// function video()
// {
//   return(
//     // <>
//     <img>
//     <div></div>
//      // </> these use when we have 2 objects side a by side so they need a parent
//   )  
// }

// -------------------------------------------------HOW TO EXPORT TWO COMPONENTS AT A TIME------------------------
// Components.js
// const ComponentA = () => {
//   return <h1>Component A</h1>;
// };
// const ComponentB = () => {
//   return <h2>Component B </h2>;
// };
// const DefaultComponent = () => {
//   return <h3>Default Component </h3>;
// };
// export  { ComponentA, ComponentB, DefaultComponent };

// ---------------------------------------------------HOW TO EXPORT TWO COMPONENTS AT A TIME-------------------------------------
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

// ----------------------------------------HARD QUOTED VALUES TO VARIABLE VALUES/PROPS------------------------------------------------------------------
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
// -------------------------------------------------------------------------------------------------------------------------------
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
// ---------------------------------------------------------------------------------------------------------------------------------
import Video from "./components/Video";
import "./App.css";
import videos from './data/thumbnail'
import PlayButton from "./components/PlayButton";

function App() {
  return (
    <div className="App">
        {
            videos.map(video=><Video
                key={video.id}
                title={video.title}
                views={video.views}
                time={video.time}
                channel={video.channel}
                verified={video.verified}
              ></Video>)
        }
        <div>    
            <PlayButton  onClick = {()=>console.log('play')}>play</PlayButton>      
            <PlayButton  onClick = {()=>alert('pause')}>pause</PlayButton>      
        </div>
    </div>
  );
}
export default App;
------------------
  import './PlayButton.css';
function PlayButton({children,onClick}) {
    function handleClick(){
        onClick();
    }
    return (
        <button
            type="button"
            className="btn btn-warning custom-hover"
            onClick={handleClick}>{children}</button>
    );
}
export default PlayButton;

// ----------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
