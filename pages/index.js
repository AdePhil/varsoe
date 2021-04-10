import { motion } from 'framer-motion';
import Button from '../components/Button';
import Feature from '../components/Feature';
import Footer from '../components/Footer';
import Form from '../components/Form';

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
    description: `Integrate "Pay with Bitsika" on your app or website so that Bitsika users can instantly pay you with their Bitsika balance via our API. Payout to any Bitsika user account via our API as well. `,
    color: 'blue',
    textLeft: false,
  },
  {
    id: 3,
    img: '/img/projects.png',
    name: 'projects',
    tagline: `Manage your <br />
    projects and clients`,
    description: `Integrate "Pay with Bitsika" on your app or website so that Bitsika users can instantly pay you with their Bitsika balance via our API. Payout to any Bitsika user account via our API as well. `,
    color: 'yellow',
    textLeft: true,
  },
];
export default function Home() {
  return (
    <div className="bg-dark">
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
            delay: 2.6,
            easings: 'ease',
          }}
          className="border-b border-border"
        >
          <header className="py-8 px-8 flex container mx-auto justify-between text-white relative z-10  align-items-center">
            <img src="/img/logo.png" alt="Logo" className="logo" />
            <Button variant="primary" href="#form">
              Get early access
            </Button>
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
                made very easy.
              </h1>
              <p className="text-center my-5  text-2xl md:text-3xl font-normal">
                Send invoices and get paid from anywhere in the world without <br /> thinking about it.
              </p>
              <div className="mx-auto inline-block">
                <Button variant="primary" href="#form" className="flex align-center">
                  Get early access &nbsp; <span className="mt-0.5">></span>
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
      <Form />
      <Footer />
    </div>
  );
}
