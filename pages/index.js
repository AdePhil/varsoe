import Button from '../components/Button';
import Form from '../components/Form';

export default function Home() {
  return (
    <div className="bg-dark">
      <section className="top-section min-h-100 md:min-h-screen">
        <div className="border-b border-border">
          <header className="px-10 py-3 sm:py-8 flex container mx-auto justify-between text-white relative z-10  align-items-center">
            <svg width="134" height="34" viewBox="0 0 134 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_b)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 5V29C1 31.2091 2.79086 33 5 33H22.6C24.8091 33 26.6 31.2091 26.6 29V15.5608C25.2616 16.5315 23.8535 17.8292 22.4601 19.3002C19.3896 22.5418 16.5488 26.4562 14.8808 29.0624C14.4978 29.6609 13.7659 29.935 13.0839 29.7355C12.4019 29.5359 11.9332 28.9105 11.9332 28.1999C11.9332 26.5441 11.8599 25.4281 10.9322 23.7185C9.93409 21.879 7.93466 19.3451 3.84572 15.0858C3.23376 14.4483 3.25443 13.4355 3.89189 12.8235C4.52934 12.2116 5.54219 12.2323 6.15414 12.8697C10.2571 17.1437 12.5244 19.9431 13.7448 22.1924C14.0788 22.8078 14.3328 23.3797 14.526 23.9222C16.1213 21.7275 18.0719 19.2798 20.1369 17.0997C21.7576 15.3886 23.4885 13.7999 25.208 12.6279C25.6603 12.3196 26.1256 12.0305 26.6 11.7727V10.6569C26.6 9.59599 26.1786 8.57857 25.4284 7.82843L19.7716 2.17157C19.0214 1.42143 18.004 1 16.9431 1H5C2.79086 1 1 2.79086 1 5Z"
                  fill="#0555FF"
                />
                <path
                  d="M26.6 15.5608H27.1V14.5805L26.3064 15.156L26.6 15.5608ZM22.4601 19.3002L22.0971 18.9564L22.4601 19.3002ZM14.8808 29.0624L15.302 29.3319H15.302L14.8808 29.0624ZM13.0839 29.7355L12.9435 30.2154L13.0839 29.7355ZM10.9322 23.7185L11.3717 23.4801L10.9322 23.7185ZM3.84572 15.0858L3.48502 15.4321L3.84572 15.0858ZM3.89189 12.8235L4.23815 13.1842L3.89189 12.8235ZM6.15414 12.8697L6.51484 12.5234H6.51484L6.15414 12.8697ZM13.7448 22.1924L14.1843 21.9539V21.9539L13.7448 22.1924ZM14.526 23.9222L14.055 24.0899L14.373 24.9831L14.9305 24.2162L14.526 23.9222ZM20.1369 17.0997L19.7739 16.7558V16.7558L20.1369 17.0997ZM25.208 12.6279L24.9263 12.2148L25.208 12.6279ZM26.6 11.7727L26.8388 12.212L27.1 12.07V11.7727H26.6ZM25.4284 7.82843L25.0749 8.18198V8.18198L25.4284 7.82843ZM19.7716 2.17157L19.418 2.52513V2.52513L19.7716 2.17157ZM1.5 29V5H0.5V29H1.5ZM5 32.5C3.067 32.5 1.5 30.933 1.5 29H0.5C0.5 31.4853 2.51472 33.5 5 33.5V32.5ZM22.6 32.5H5V33.5H22.6V32.5ZM26.1 29C26.1 30.933 24.533 32.5 22.6 32.5V33.5C25.0853 33.5 27.1 31.4853 27.1 29H26.1ZM26.1 15.5608V29H27.1V15.5608H26.1ZM26.3064 15.156C24.9346 16.151 23.5031 17.472 22.0971 18.9564L22.8231 19.6441C24.2039 18.1863 25.5885 16.912 26.8936 15.9655L26.3064 15.156ZM22.0971 18.9564C18.9995 22.2267 16.1398 26.1677 14.4597 28.7928L15.302 29.3319C16.9578 26.7446 19.7798 22.857 22.8231 19.6441L22.0971 18.9564ZM14.4597 28.7928C14.1963 29.2043 13.6932 29.3928 13.2243 29.2556L12.9435 30.2154C13.8386 30.4773 14.7992 30.1174 15.302 29.3319L14.4597 28.7928ZM13.2243 29.2556C12.7554 29.1184 12.4332 28.6884 12.4332 28.1999H11.4332C11.4332 29.1325 12.0483 29.9534 12.9435 30.2154L13.2243 29.2556ZM12.4332 28.1999C12.4332 26.506 12.3561 25.2943 11.3717 23.4801L10.4928 23.957C11.3636 25.5619 11.4332 26.5821 11.4332 28.1999H12.4332ZM11.3717 23.4801C10.3388 21.5765 8.29746 19.001 4.20641 14.7395L3.48502 15.4321C7.57186 19.6892 9.52938 22.1815 10.4928 23.957L11.3717 23.4801ZM4.20641 14.7395C3.78569 14.3013 3.7999 13.605 4.23815 13.1842L3.54562 12.4628C2.70896 13.266 2.68183 14.5954 3.48502 15.4321L4.20641 14.7395ZM4.23815 13.1842C4.6764 12.7635 5.37273 12.7777 5.79345 13.216L6.51484 12.5234C5.71164 11.6868 4.38228 11.6597 3.54562 12.4628L4.23815 13.1842ZM5.79345 13.216C9.89417 17.4876 12.1196 20.2455 13.3054 22.4309L14.1843 21.9539C12.9291 19.6407 10.6201 16.7998 6.51484 12.5234L5.79345 13.216ZM13.3054 22.4309C13.628 23.0254 13.8712 23.5736 14.055 24.0899L14.9971 23.7545C14.7945 23.1857 14.5296 22.5902 14.1843 21.9539L13.3054 22.4309ZM14.9305 24.2162C16.5169 22.0337 18.4537 19.6038 20.4999 17.4435L19.7739 16.7558C17.6901 18.9558 15.7257 21.4214 14.1216 23.6282L14.9305 24.2162ZM20.4999 17.4435C22.1075 15.7463 23.8108 14.1854 25.4896 13.0411L24.9263 12.2148C23.1663 13.4145 21.4078 15.0308 19.7739 16.7558L20.4999 17.4435ZM25.4896 13.0411C25.9304 12.7406 26.3813 12.4606 26.8388 12.212L26.3612 11.3334C25.8698 11.6005 25.3902 11.8986 24.9263 12.2148L25.4896 13.0411ZM26.1 10.6569V11.7727H27.1V10.6569H26.1ZM25.0749 8.18198C25.7313 8.83836 26.1 9.7286 26.1 10.6569H27.1C27.1 9.46338 26.6259 8.31879 25.782 7.47487L25.0749 8.18198ZM19.418 2.52513L25.0749 8.18198L25.782 7.47487L20.1251 1.81802L19.418 2.52513ZM16.9431 1.5C17.8714 1.5 18.7616 1.86875 19.418 2.52513L20.1251 1.81802C19.2812 0.974104 18.1366 0.5 16.9431 0.5V1.5ZM5 1.5H16.9431V0.5H5V1.5ZM1.5 5C1.5 3.067 3.067 1.5 5 1.5V0.5C2.51472 0.5 0.5 2.51472 0.5 5H1.5Z"
                  fill="#FF2E6A"
                  fillOpacity="0.08"
                />
              </g>
              <path
                d="M40.5878 26.6336H44.1061C44.9456 26.6336 45.6957 26.1093 45.9842 25.321L50.108 14.0538C50.5857 12.7488 49.6196 11.3664 48.2299 11.3664H47.8166C46.9478 11.3664 46.1785 11.9272 45.9126 12.7542L43.0305 21.7176L40.1485 12.7542C39.8826 11.9272 39.1132 11.3664 38.2445 11.3664H37.8617C36.4721 11.3664 35.5059 12.7488 35.9836 14.0538L40.5878 26.6336Z"
                fill="white"
              />
              <path
                d="M59.2271 27C61.8531 27 63.2271 25.9008 63.8683 25.1374L63.99 25.4214C64.3052 26.1568 65.0283 26.6336 65.8283 26.6336H66.6011C67.7057 26.6336 68.6011 25.7382 68.6011 24.6336V13.3664C68.6011 12.2618 67.7057 11.3664 66.6011 11.3664H65.7348C64.8789 11.3664 64.1226 11.9232 63.8683 12.7405C63.105 11.855 61.5782 11 59.4408 11C55.9599 11 52.1737 13.7176 52.1737 19C52.1737 23.8855 55.4714 27 59.2271 27ZM60.4485 23C58.4027 23 56.8454 21.4427 56.8454 19C56.8454 16.5573 58.4027 15 60.4485 15C62.4637 15 64.0515 16.5267 64.0515 19C64.0515 21.4733 62.4637 23 60.4485 23Z"
                fill="white"
              />
              <path
                d="M72.7374 24.6336C72.7374 25.7382 73.6328 26.6336 74.7374 26.6336H75.3786C76.4831 26.6336 77.3786 25.7382 77.3786 24.6336V19.0305C77.3786 16.6489 78.661 15.5802 80.2488 15.5802C81.4149 15.5802 82.7733 14.9798 82.9949 13.835L83.1465 13.0515C83.3262 12.1228 82.8276 11.1683 81.8894 11.0478C81.6521 11.0174 81.4085 11 81.1648 11C79.4244 11 77.7755 11.7939 77.0122 13.4122L76.9408 13.0138C76.7701 12.0604 75.9407 11.3664 74.9721 11.3664H74.7374C73.6328 11.3664 72.7374 12.2618 72.7374 13.3664V24.6336Z"
                fill="white"
              />
              <path
                d="M90.3235 27C94.0487 27 96.3998 24.9542 96.3998 22.145C96.3998 19.4275 94.8426 17.9924 92.4609 17.1069L90.3845 16.3435C89.6823 16.0687 89.3769 15.7634 89.3769 15.2443C89.3769 14.6947 89.8349 14.3282 90.5067 14.3282C90.5785 14.3282 90.6484 14.3326 90.7162 14.3414C91.782 14.4785 92.9316 15.1815 93.8802 14.6767C94.7587 14.2093 95.1429 13.0854 94.4271 12.3943C93.4854 11.4852 92.155 11 90.354 11C87.3616 11 85.1021 12.8015 85.1021 15.3359C85.1021 17.6565 86.354 19.0916 88.4303 19.855L90.3235 20.5573C91.6364 21.0458 92.1555 21.5649 92.1555 22.2061C92.1555 22.8473 91.6059 23.4275 90.4456 23.4275C89.8783 23.4275 89.3456 23.2611 88.8805 22.945C87.9594 22.3187 86.8033 21.7617 85.7899 22.224C84.8622 22.6471 84.362 23.7349 84.9507 24.5673C86.0129 26.0693 87.7994 27 90.3235 27Z"
                fill="white"
              />
              <path
                d="M106.905 27C111.515 27 115.149 23.7939 115.149 19C115.149 14.2061 111.515 11 106.905 11C102.324 11 98.6908 14.2061 98.6908 19C98.6908 23.7939 102.324 27 106.905 27ZM106.905 22.9695C104.92 22.9695 103.332 21.3206 103.332 19C103.332 16.6489 104.92 15.0305 106.905 15.0305C108.92 15.0305 110.477 16.6489 110.477 19C110.477 21.3206 108.92 22.9695 106.905 22.9695Z"
                fill="white"
              />
              <path
                d="M131.848 24.813C132.644 24.0101 132.228 22.7366 131.215 22.2344L130.969 22.1124C130.009 21.6358 128.863 22.0958 127.918 22.604C127.428 22.8678 126.82 23.0305 126.074 23.0305C124.334 23.0305 123.052 22.1756 122.655 20.1603H133.464C133.586 19.6412 133.647 19.0305 133.647 18.4809C133.647 14.7252 131.204 11 125.83 11C121.189 11 118.013 14.1756 118.013 19C118.013 23.7939 121.219 27 125.861 27C128.454 27 130.454 26.2205 131.848 24.813ZM125.83 14.5725C127.357 14.5725 128.578 15.4275 128.884 17.0763H122.746C123.235 15.1832 124.487 14.5725 125.83 14.5725Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_b"
                  x="-3.5"
                  y="-3.5"
                  width="34.6"
                  height="41"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
                  <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape" />
                </filter>
              </defs>
            </svg>
            <Button variant="primary" href="#form">
              Get early access
            </Button>
          </header>
        </div>
        <div className="max-w-8xl  mx-auto flex justify-center items-center  py-80 relative">
          <div className="flex flex-col relative  z-10 pt-10 pb-5 ">
            <h1 className="text-center font-medium  text-7xl  md:text-8xl ">
              Freelancing tools for the
              <br />
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
      <section className="app bg-dark  py-20 z-20 max-w-screen-lg px-10 sm:px-20 mx-auto relative">
        <img src="/svgs/app.svg" alt="Versoe app" className="w-100 mt-10 md:-mt-300" />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-y-14 gap-x-64 items-center my-60">
          <div className="">
            <p className="text-red my-3 text-base">INVOICES</p>
            <h3 className="text-5xl">
              Generate, Send and <br />
              Follow up on Invoices
            </h3>
            <p className="text-textColor max-w-full md:max-w-md leading-relaxed py-10 text-2xl">
              Integrate "Pay with Bitsika" on your app or website so that Bitsika users can instantly pay you with their
              Bitsika balance via our API. Payout to any Bitsika user account via our API as well.{' '}
            </p>
          </div>
          <div className="">
            <img src="/svgs/invoice.svg" alt="invoice" className="w-full" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-y-14 gap-x-64 items-center my-60">
          <div className="order-2 md:order-1">
            <img src="/svgs/payments.svg" alt="invoice" className="w-full" />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-darkBlue my-3 text-base">PAYMENTS</p>
            <h3 className="text-5xl">
              Get paid for
              <br />
              your services
            </h3>
            <p className="text-textColor max-w-full md:max-w-md leading-relaxed py-10 text-2xl">
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
            <p className="text-textColor max-w-full md:max-w-md leading-relaxed py-10 text-2xl">
              Integrate "Pay with Bitsika" on your app or website so that Bitsika users can instantly pay you with their
              Bitsika balance via our API. Payout to any Bitsika user account via our API as well.
            </p>
          </div>
          <div className="">
            <img src="/svgs/timeline.svg" alt="projects" className="w-full" />
          </div>
        </div>
      </section>
      <Form />
    </div>
  );
}
