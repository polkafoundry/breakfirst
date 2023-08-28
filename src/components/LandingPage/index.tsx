import Headline from './Headline';
// import Header from './Header';
import SubHeadline from './SubHeadline';
import Introduction from './Introduction';
import Attention from './Attention';
// import Snapshots from './Snapshots';
import Contact from './Contact';
// import Footer from './Footer';
import HeaderNew from './HeaderNew';
import FooterNew from './FooterNew';
import NewSnapshots from './NewSnapshots';

const LandingPage = () => {
  return (
    <>
      {/* <Header /> */}
      <HeaderNew />

      <Headline />
      <SubHeadline />
      <Introduction />
      <Attention />
      {/* <Snapshots /> */}
      <NewSnapshots />
      <Contact />

      {/* <Footer /> */}
      <FooterNew />
    </>
  );
};

export default LandingPage;
