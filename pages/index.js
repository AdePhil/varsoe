import Button from '../components/Button';
import Footer from '../components/Footer';
import Form from '../components/Form';

export default function Home() {
  return (
    <div className="bg-dark">
      <section className="top-section min-h-100 md:min-h-screen">
        <div className="border-b border-border">
          <header className="py-8 px-8 flex container mx-auto justify-between text-white relative z-10  align-items-center">
            <img src="/img/logo.png" alt="Logo" className="logo" />
            <Button variant="primary" href="#form">
              Get early access
            </Button>
          </header>
        </div>
        <div className="max-w-8xl top-text-container overflow-hidden  mx-auto flex justify-center items-center pt-60 pb-40 sm:pb-80 sm:pt-80 relative">
          <div className="flex flex-col relative  z-10 pt-10 pb-5 px-10">
            <h1 className="text-center font-medium  text-7xl  md:text-8xl ">
              Freelancing tools for the
              <br className="hidden sm:block" />
              best of us.
            </h1>
            <p className="text-center my-5  text-2xl md:text-3xl font-normal">
              Send invoices and get paid from anywhere in the world without <br /> thinking about it.
            </p>
            <div className="mx-auto inline-block">
              <Button variant="primary" href="#form" className="flex align-center">
                Get early access &nbsp; <span className="mt-0.5">></span>
              </Button>
            </div>
            <img src="/svgs/money.svg" alt="icon" className="icon icon-absolute icon-money" />
            <img src="/svgs/money-bag.svg" alt="icon" className="icon icon-absolute icon-money-bag" />
            <img src="/svgs/aero.svg" alt="icon" className="icon icon-absolute icon-aero" />
            <img src="/svgs/book.svg" alt="icon" className="icon icon-absolute icon-book" />
          </div>
        </div>
      </section>
      <section className="app bg-dark  py-20 z-20 max-w-screen-lg px-10 sm:px-20 mx-auto relative overflow-hidden sm:overflow-visible">
        <img src="/img/app.png" alt="Versoe app" className="w-100 mt-10 md:-mt-300 hidden md:block" />
        <img src="/img/app-mobile.png" alt="varsoe mobile" className="md:hidden mx-auto" />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-y-14 gap-x-64 items-center my-60">
          <div className="">
            <p className="text-red my-3 text-base">INVOICES</p>
            <h3 className="text-5xl">
              Generate, Send and <br />
              Follow up on Invoices
            </h3>
            <p className="text-textColor max-w-full md:max-w-2xl leading-relaxed py-10 text-2xl">
              Integrate "Pay with Bitsika" on your app or website so that Bitsika users can instantly pay you with their
              Bitsika balance via our API. Payout to any Bitsika user account via our API as well.{' '}
            </p>
          </div>
          <div className="feature-img red">
            <img src="/img/invoice.png" alt="invoice" className="w-full" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-y-14 gap-x-64 items-center my-60">
          <div className="order-2 md:order-1 feature-img blue">
            <img src="/img/payments.png" alt="invoice" className="w-full" />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-darkBlue my-3 text-base">PAYMENTS</p>
            <h3 className="text-5xl">
              Get paid for
              <br />
              your services
            </h3>
            <p className="text-textColor max-w-full md:max-w-2xl leading-relaxed py-10 text-2xl">
              Integrate "Pay with Bitsika" on your app or website so that Bitsika users can instantly pay you with their
              Bitsika balance via our API. Payout to any Bitsika user account via our API as well.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-y-14 gap-x-64 items-center my-60">
          <div className="">
            <p className="text-red my-3 text-base">PROJECTS</p>
            <h3 className="text-5xl">
              Manage your <br />
              projects and clients
            </h3>
            <p className="text-textColor max-w-full md:max-w-2xl leading-relaxed py-10 text-2xl">
              Integrate "Pay with Bitsika" on your app or website so that Bitsika users can instantly pay you with their
              Bitsika balance via our API. Payout to any Bitsika user account via our API as well.
            </p>
          </div>
          <div className="feature-img yellow">
            <img src="/img/projects.png" alt="projects" className="w-full" />
          </div>
        </div>
      </section>
      <Form />
      <Footer />
    </div>
  );
}
