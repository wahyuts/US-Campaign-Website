import styles from '../../styles/GeneralLayout.module.css';
// import HeadNav from '../navbar/HeadNav';
import Footer from '../navbar/Footer';
import MainHeadNav from '../navbar/MainHeadNav';
const GeneralLayout = ({ children }) => {
  return (
    <div className={styles.contGeneral}>
      <MainHeadNav />
      {/* <HeadNav/> */}
      <div className={styles.childrenFlex}>{children}</div>
      <Footer />
    </div>
  );
};

export default GeneralLayout;
