import Headline from './Headline';
import Header from './Header';
import SubHeadline from './SubHeadline';
import Introduction from './Introduction';
import Attention from './Attention';
import Snapshots from './Snapshots';
import Contact from './Contact';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <>
      <Header />

      <Headline />
      <SubHeadline />
      <Introduction />
      <Attention />
      <Snapshots />
      <Contact />

      <Footer />
    </>
  );
};

export default LandingPage;
