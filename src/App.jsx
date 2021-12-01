import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import logo from './logo.png'
import { BrowserRouter,Switch, Route } from "react-router-dom";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    // <div>
    //   <Navigation />
    //   <Header data={landingPageData.Header} />
    //   <Features data={landingPageData.Features} />
    //   <About data={landingPageData.About} />
    //   <Services data={landingPageData.Services} />
    //   <Gallery data={landingPageData.Gallery}/>
    //   <Testimonials data={landingPageData.Testimonials} />
    //   <Team data={landingPageData.Team} />
    //   <Contact data={landingPageData.Contact} />
    // </div>
    <BrowserRouter>
    <Navigation />
        <Switch>           
            <Route path='/' exact> 
               <Features data={landingPageData.Features} />
            </Route>
            
            <Route path='/about' exact> 
            <About data={landingPageData.About} />
            </Route>

            <Route path='/services' exact> 
            <Services data={landingPageData.Services} />
            </Route>

            <Route path='/gallery' exact> 
            <Gallery data={landingPageData.Gallery}/>
            </Route>

            <Route path='/testimonials' exact> 
            <Testimonials data={landingPageData.Testimonials} />
            </Route>

            <Route path='/team' exact> 
            <Team data={landingPageData.Team} />
            </Route>
           
            
        </Switch>
        <Contact data={landingPageData.Contact} />
    </BrowserRouter>
  );
};

export default App;
