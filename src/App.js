import './App.css';
import React,{useContext} from "react";
import Maps from './components/Maps';
import SpinnerLoader from './components/SpinnerLoader';
import MapContext from './context/MapContext'

function App() {

  const {isLoading, data} = useContext(MapContext)

  return (
    <div>
      {
        isLoading ? <SpinnerLoader />
        :
        <Maps dataMap={data}/>
      }
    </div>
  )

}

export default App;
