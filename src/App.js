import './App.css';
import React, { useState, useEffect } from "react";
import Hero from './components/Hero/Hero';
import { BarLoader } from "react-spinners";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, [])
  
  return (
    // <div className="App font-poppins overflow-hidden">
    //   <Hero/>
    // </div>

    <div>
    {loading ? (
      <div id="app-loader">
        <BarLoader color={"orange"} loading={loading} />
        <span className="text-[orange] font-monserrat font-bold my-4">
          Loading...
        </span>
      </div>
    ) : (
      <section
      className="App font-poppins overflow-hidden">
        <div className=''>
          <Hero />
        </div>
      </section>
    )}
  </div>
  );
}

export default App;
