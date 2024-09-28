import './styles/globals.css';

import Banner from "./elements/banner";
import Benefits from './elements/benefits';
import Branding from './elements/branding';
import FeatureHighlight from './elements/feature.highlight';
import Footer from '@/components/Footer';
import Header from './header';

// Importing global CSS here

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Branding />
      <Benefits />
      <FeatureHighlight />
      <Footer />
    </div>
  );
};

export default Home;
