import { motion } from 'framer-motion';
import { useState } from 'react';
import Head from 'next/head';
import Button from '../components/Button';
import Feature from '../components/Feature';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Modal from '../components/Modal';

const features = [
  {
    id: 1,
    img: '/img/invoice.png',
    name: 'invoices',
    tagline: `Generate, Send and <br />
    Follow up on Invoices`,
    description: `You never have to think about getting paid for what you do. Get invoices at the  tip of your fingers. Send invoices and automatically follow up on invoices.`,
    color: 'red',
    textLeft: true,
  },
  {
    id: 2,
    img: '/img/payments.png',
    name: 'payments',
    tagline: `Get paid for  <br />  your services`,
    description: `Spend your time doing the work not thinking of how to get paid. Create payment links and it doesn’t matter how your clients pay. You simply get your money.`,
    color: 'blue',
    textLeft: false,
  },
  {
    id: 3,
    img: '/img/projects.png',
    name: 'projects',
    tagline: `Manage your <br />
    projects and clients`,
    description: `Track your projects and customers. Track payments relating to projects and customers. It’s simply that easy.`,
    color: 'yellow',
    textLeft: true,
  },
];
export default function Home({ deviceType }) {
  const [navState, setNavState] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const toggleNavState = () => {
    setNavState((s) => !s);
  };

  return (
    <div className="bg-dark">
      <Head>
        <title>Varsoe | Welcome to Varsoe</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <section className="top-section min-h-100 md:min-h-screen">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: deviceType === 'mobile' ? 0.75 : 2.6,
            easings: 'ease',
          }}
          className="border-b border-border"
        >
          <header className="header py-8 px-8 flex container mx-auto justify-between text-white relative z-10  items-center">
            <img src="/img/logo.png" alt="Logo" className="logo" />
            <Button variant="primary" href="#form" className="btn-access">
              Get early access
            </Button>
            <button type="button" className="hamburger" onClick={toggleNavState}>
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="32" height="32" rx="16" fill="#0C0D11" />
                <rect x="0.5" y="0.5" width="33" height="33" rx="16.5" stroke="white" strokeOpacity="0.2" />
                <path d="M9 11H25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 17H25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 23H25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </header>
        </motion.div>
        <div className="max-w-8xl top-text-container overflow-hidden  mx-auto flex justify-center items-center pt-60 pb-40 sm:pb-80 sm:pt-80 relative">
          <div className="flex flex-col relative  z-10 pt-10 pb-5 px-10">
            <motion.div
              initial={{
                y: 100,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                type: 'tween',
                duration: 0.35,
                delay: 0.4,
                easings: 'ease',
              }}
              className="flex flex-col"
            >
              <h1 className="text-center font-medium  text-7xl  md:text-8xl ">
                Invoices and Payment
                <br className="hidden sm:block" />
                {' made very easy.'}
              </h1>
              <p className="text-center my-5  text-2xl md:text-3xl font-normal">
                Send invoices and get paid from anywhere in the world without <br /> &nbsp; thinking about it.
              </p>
              <div className="mx-auto inline-block">
                <Button variant="primary" href="#form" className="flex align-center">
                  <span>Get early access &nbsp;</span>
                  <svg
                    className="self-center"
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L1 9"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </div>
            </motion.div>
            <motion.img
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                scale: [2.2, 2, 1],
              }}
              transition={{
                // type: 'tween',
                duration: 0.3,
                delay: 0.75,
                easings: 'ease',
              }}
              src="/svgs/money.svg"
              alt="icon"
              className="icon icon-absolute icon-money"
            />
            <motion.img
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                scale: [2, 1.5, 1],
              }}
              transition={{
                // type: 'tween',
                duration: 0.3,
                delay: 1.15,
                easings: 'ease',
              }}
              src="/svgs/money-bag.svg"
              alt="icon"
              className="icon icon-absolute icon-money-bag"
            />
            <motion.img
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                scale: [2, 1.5, 1],
              }}
              transition={{
                // type: 'tween',
                duration: 0.3,
                delay: 1.55,
                easings: 'ease',
              }}
              src="/svgs/aero.svg"
              alt="icon"
              className="icon icon-absolute icon-aero"
            />
            <motion.img
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                scale: [2, 1.5, 1],
              }}
              transition={{
                // type: 'tween',
                duration: 0.3,
                delay: 1.95,
                easings: 'ease',
              }}
              src="/svgs/book.svg"
              alt="icon"
              className="icon icon-absolute icon-book"
            />
          </div>
        </div>
      </section>
      <nav className={`mobile-nav ${navState ? 'active' : ''}`}>
        <div className="flex justify-end">
          <button type="button" className="w-10 mt-2 mb-10" onClick={toggleNavState}>
            <img src="/svgs/close.svg" alt="close" />
          </button>
        </div>
        <div className="py-10 px-10 mobile-border">
          <div className="flex">
            <Button variant="primary" className="flex justify-center w-full mb-20" onClick={toggleNavState}>
              <a href="#form">Get early access</a>
            </Button>
          </div>
          <div className="flex justify-center">
            <div className="inline-flex">
              <a
                href="https://twitter.com/getvarsoe"
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 px-12  text-2xl"
              >
                Tw
              </a>
              <a
                href="https://www.linkedin.com/company/varsoe"
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 px-12  text-2xl"
              >
                Li
              </a>
              <a
                href="https://www.instagram.com/getvarsoe/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 px-12  text-2xl"
              >
                Ig
              </a>
            </div>
          </div>
        </div>
      </nav>
      <section className="app bg-dark  py-20 z-20 max-w-screen-lg px-10 sm:px-20 mx-auto relative overflow-hidden sm:overflow-visible">
        <motion.img
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            type: 'tween',
            duration: 0.5,
            delay: 2.6,
            easings: 'ease',
          }}
          src="/img/app.png"
          alt="Versoe app"
          className="w-100 mt-10 md:-mt-300 hidden md:block"
        />
        <motion.img
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            type: 'tween',
            duration: 0.5,
            delay: 0.8,
            easings: 'ease',
          }}
          src="/img/app-mobile.png"
          alt="varsoe mobile"
          className="md:hidden mx-auto"
        />
        {features.map((feature) => (
          <Feature {...feature} key={feature.id} />
        ))}
      </section>
      <Form setShowModal={setShowModal} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const UA = context.req.headers['user-agent'];
  const isMobile = Boolean(UA.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));

  return {
    props: {
      deviceType: isMobile ? 'mobile' : 'desktop',
    },
  };
}
