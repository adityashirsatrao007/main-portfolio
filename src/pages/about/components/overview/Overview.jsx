import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import clsx from 'clsx';
import styles from '@src/pages/about/components/overview/styles/overview.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';

function Overview() {
  const isMobile = useIsMobile();

  return (
    <section className={clsx(styles.root, 'layout-grid-inner')}>
      <div className={styles.title}>
        {isMobile ? (
          <AppearTitle key="mobile-queto">
            <h3 className="h3">The developer&apos;s role </h3>
            <h3 className="h3">
              is like a kind host, <span className="medium">ensuring</span>
            </h3>
            <h3 className="h3">
              visitors have a <span className="medium">smooth</span> and
            </h3>
            <h3 className="h3">
              <span className="medium">enjoyable</span> experience.
            </h3>
          </AppearTitle>
        ) : (
          <AppearTitle key="desktop-queto">
            <h3 className="h3">The developer&apos;s role is like a</h3>
            <h3 className="h3">
              kind host, <span className="medium">ensuring</span> visitors have
            </h3>
            <h3 className="h3">
              a <span className="medium">smooth</span> and <span className="medium">enjoyable</span> experience.
            </h3>
          </AppearTitle>
        )}
      </div>
      <div className={clsx(styles.text, 'p-l', styles.myStory)}>
        <AppearTitle>
          <span>Some words</span>
        </AppearTitle>
      </div>
      <div className={styles.desc}>
        {!isMobile ? (
          <AppearTitle key="desktop-overview">
            <h6 className="h6">Hey there! I&apos;m a full-stack developer and ML enthusiast from India with a </h6>
            <h6 className="h6">passion for building scalable, secure digital products. I&apos;m pursuing a B.Tech</h6>
            <h6 className="h6">in AI &amp; Data Science at N.K. Orchid College of Engineering to deepen my</h6>
            <h6 className="h6">understanding of how to build sleek, efficient systems end to end.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>When I&apos;m not busy coding, you&apos;ll often find me solving algorithmic problems</h6>
            <h6 className="h6">or contributing to open source. My work has spanned distributed systems,</h6>
            <h6 className="h6">real-time pipelines, and ML-powered products - winning 1st Place at Hack-to-</h6>
            <h6 className="h6">Future 3.0 (600+ teams) and 1st Runner-Up at Orchathon 2K26 (800+ teams).</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>I&apos;m also a first-author IEEE researcher (ICCTWC 2026, Scopus-indexed) with a</h6>
            <h6 className="h6">conference paper on multilingual BERT sentiment and intrusion detection.</h6>
            <h6 className="h6">366+ LeetCode problems solved, 100+ merged PRs, and I still believe every</h6>
            <h6 className="h6">project is a chance to get better.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>I&apos;m looking forward to collaborating and creating something great!</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Aditya Shirsatrao.</h6>
          </AppearTitle>
        ) : (
          <AppearTitle key="mobile-overview">
            <h6 className="h6">Hey there! I&apos;m a full-stack developer and ML enthusiast</h6>
            <h6 className="h6">from India with a passion for building scalable, secure</h6>
            <h6 className="h6">digital products. I&apos;m pursuing a B.Tech in AI &amp; Data</h6>
            <h6 className="h6">Science at N.K. Orchid College of Engineering to build</h6>
            <h6 className="h6">sleek, efficient systems end to end.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>When I&apos;m not busy coding, you&apos;ll often find me solving</h6>
            <h6 className="h6">algorithmic problems or contributing to open source.</h6>
            <h6 className="h6">My work spans distributed systems, real-time pipelines,</h6>
            <h6 className="h6">and ML-powered products - winning 1st Place at Hack-</h6>
            <h6 className="h6">to-Future 3.0 (600+ teams) and 1st Runner-Up at</h6>
            <h6 className="h6">Orchathon 2K26 (800+ teams).</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>I&apos;m also a first-author IEEE researcher (ICCTWC 2026,</h6>
            <h6 className="h6">Scopus-indexed) with a paper on multilingual BERT</h6>
            <h6 className="h6">sentiment and intrusion detection. 366+ LeetCode</h6>
            <h6 className="h6">problems solved, 100+ merged PRs, and I still believe</h6>
            <h6 className="h6">every project is a chance to get better.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>I&apos;m looking forward to collaborating and creating something</h6>
            <h6 className="h6">great!</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Aditya Shirsatrao.</h6>
          </AppearTitle>
        )}
      </div>
    </section>
  );
}
export default Overview;
