import AppearByWords from '@src/components/animationComponents/appearByWords/Index';
import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import Badge from '@src/pages/components/clients/components/Badge';
import clsx from 'clsx';
import { gsap } from 'gsap';
import styles from '@src/pages/components/clients/styles/clients.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';
import { useIsomorphicLayoutEffect } from '@src/hooks/useIsomorphicLayoutEffect';
import { useRef } from 'react';
import { useWindowSize } from '@darkroom.engineering/hamo';

function Clients() {
  const isMobile = useIsMobile();
  const textRefs = useRef([]);
  const badgeRefs = useRef([]);
  const rootRef = useRef();
  const windowSize = useWindowSize();

  const setupScrollAnimation = () => {
    const ctx = gsap.context(() => {
      if (!isMobile) {
        const vw = (coef) => windowSize.height * (coef / 100);
        textRefs.current.forEach((textRef, index) => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: rootRef.current,
                start: index === 0 ? `top-=${vw(35)}` : `top+=${vw(35 + 5.5555556 * index)}`,
                end: index === 0 ? `bottom-=${vw(35 + 5.5555556 * index)}` : `bottom+=${vw(25)}`,
                toggleActions: 'play none reverse none',
                scrub: true,
                scroller: document?.querySelector('main'),
                invalidateOnRefresh: true,
              },
            })
            .to(textRef, {
              top: `${10 + 30 * index + 5.5555556 * index}vw`,
            });
        });
      }
    });

    return ctx;
  };

  useIsomorphicLayoutEffect(() => {
    const ctx = setupScrollAnimation(textRefs, rootRef, windowSize, isMobile);
    return () => ctx.kill();
  }, [isMobile, windowSize.height]);

  return (
    <section ref={rootRef} className={clsx(styles.root, 'layout-grid-inner')}>
      <h1 className={clsx(styles.sectionTitle, 'h1')}>
        <AppearByWords>Clients</AppearByWords>
      </h1>
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2025</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[0] = el;
        }}
        className={styles.first}
      >
        <Badge name="company1" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>Unified Mentor</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">Fullstack Web Development Intern at Unified Mentor</div>
            <div className="p-l">Pvt. Ltd. Built backend, distributed systems &</div>
            <div className="p-l">AI-integrated products. Architected an AI-powered</div>
            <div className="p-l">code review platform with Kafka and Redis, cutting</div>
            <div className="p-l">analysis latency by 45% via parallel workers.</div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div className={styles.firstEmpty} />
          <div
            ref={(el) => {
              textRefs.current[0] = el;
            }}
            className={styles.firstText}
          >
            <AppearTitle>
              <h6 className="h6">2025</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>Unified Mentor</h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">Fullstack Web Development Intern at Unified</div>
              <div className="p-l">Mentor Pvt. Ltd. Built backend, distributed</div>
              <div className="p-l">systems &amp; AI-integrated products. Architected</div>
              <div className="p-l">an AI-powered code review platform with Kafka</div>
              <div className="p-l">and Redis, cutting analysis latency by 45% via</div>
              <div className="p-l">parallel distributed workers and AST-based search.</div>
              <div className="p-l">Engineered a real-time collaborative IDE with</div>
              <div className="p-l">sub-100ms sync using WebSockets and CRDTs.</div>
            </AppearTitle>
          </div>
        </>
      ) : null}
      {!isMobile ? <div className={styles.secondEmpty} /> : null}
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2025</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[1] = el;
        }}
        className={styles.second}
      >
        <Badge name="company2" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>GDG on Campus</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">AI/ML Lead at Google Developer Groups on Campus</div>
            <div className="p-l">(GDG-NKOCET). Lead AI/ML initiatives and technical</div>
            <div className="p-l">workshops for a 200+ student community. Mentored</div>
            <div className="p-l">juniors on system design, Git/GitHub workflows,</div>
            <div className="p-l">and production ML engineering.</div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div
            ref={(el) => {
              textRefs.current[1] = el;
            }}
            className={styles.secondText}
          >
            <AppearTitle>
              <h6 className="h6">2025</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>GDG on Campus</h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">AI/ML Lead at Google Developer Groups on</div>
              <div className="p-l">Campus (GDG-NKOCET). Led AI/ML initiatives</div>
              <div className="p-l">and technical workshops for a 200+ student</div>
              <div className="p-l">community. Mentored juniors on system design,</div>
              <div className="p-l">Git/GitHub workflows, and production ML</div>
              <div className="p-l">engineering. Organized campus tech events</div>
              <div className="p-l">and developer learning circles.</div>
            </AppearTitle>
          </div>
          <div className={styles.fourthEmpty} />
        </>
      ) : null}
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2025</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[2] = el;
        }}
        className={styles.third}
      >
        <Badge name="company3" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>Open Source</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">Contributed 100+ pull requests to 40+ open source</div>
            <div className="p-l">repositories, including Google (OSS-Fuzz), Microsoft</div>
            <div className="p-l">(VibeVoice), Apache (DataFusion), and Hedera Hashgraph</div>
            <div className="p-l">(Hiero SDK). IEEE first-author publication at ICCTWC</div>
            <div className="p-l">2026. 1st Place Hack to Future 3.0 (600+ teams) and 1st</div>
            <div className="p-l">Runner-Up Orchathon 2K26 (800+ teams).</div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div className={styles.fifthEmpty} />
          <div
            ref={(el) => {
              textRefs.current[2] = el;
            }}
            className={styles.thirdText}
          >
            <AppearTitle>
              <h6 className="h6">2025</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>Open Source</h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">Open Source Contributor &amp; Competitive Programmer.</div>
              <div className="p-l">Contributed 100+ pull requests to 40+ open source</div>
              <div className="p-l">repositories, including Google (OSS-Fuzz), Microsoft</div>
              <div className="p-l">(VibeVoice), Apache (DataFusion), and Hedera Hashgraph</div>
              <div className="p-l">(Hiero SDK). IEEE first-author publication at ICCTWC</div>
              <div className="p-l">2026. 1st Place - Hack to Future 3.0 (600+ teams) and 1st</div>
              <div className="p-l">Runner-Up at Orchathon 2K26 (800+ teams).</div>
            </AppearTitle>
          </div>
        </>
      ) : null}
    </section>
  );
}

export default Clients;
