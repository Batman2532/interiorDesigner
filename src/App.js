import './styles/main.scss';

import BlogFullPageView from './components/Blog/BlogFullPageView';
import HeroCard from './components/homepage/HeroCard';
import MyselfBlock from './components/common/MyselfBlock';
import ContactBlock from './components/common/ContactBlock';
import ProjectsBlock from './components/Projects/ProjectsBlock';
import BlogBlock from './components/Blog/BlogBlock';
import AboutUs from './components/homepage/AboutUs';
import Testimonial from './components/homepage/Testimonial';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <div className='page-wrapper'>
        <BlogFullPageView />
        <MyselfBlock />
        <HeroCard />
        <ProjectsBlock />
        <BlogBlock />
        <ContactBlock />
        <Testimonial />
        <AboutUs />
      </div>
    </div>
  );
}

export default App;
