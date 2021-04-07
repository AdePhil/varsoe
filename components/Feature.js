import { useAnimation, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const nameToTextColor = {
  blue: 'text-darkBlue',
  red: 'text-red',
  yellow: 'text-yellow',
};
const Feature = ({ textLeft, img, name, tagline, description, color }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ rootMargin: '-200px 0px' });

  const imageClass = textLeft ? `feature-img ${color}` : `order-2 md:order-1 feature-img ${color}`;
  const textClass = textLeft ? '' : `order-1 md:order-2`;

  useEffect(() => {
    if (inView) {
      // controls.set('initial');
      controls.start('visible');
    }
  }, [controls, inView]);
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-y-16 gap-x-64 items-center my-60" ref={ref}>
      <motion.div
        className={textClass}
        initial="initial"
        animate={controls}
        variants={{
          initial: {
            y: 100,
            opacity: 0,
          },
          visible: { y: 0, opacity: 1 },
        }}
        transition={{
          type: 'tween',
          duration: 0.35,
          delay: 0.3,
          easings: 'ease',
          repeatType: 'reverse',
        }}
      >
        <p className={`${nameToTextColor[color]} my-3 text-base uppercase`}>{name}</p>
        <h3 className="text-5xl" dangerouslySetInnerHTML={{ __html: tagline }} />
        <p className="text-textColor max-w-full md:max-w-2xl leading-relaxed py-10 text-2xl">{description}</p>
      </motion.div>
      <motion.div
        initial="initial"
        animate={controls}
        variants={{
          initial: {
            y: 0,
            opacity: 0,
          },
          visible: { y: 0, opacity: 1 },
        }}
        transition={{
          type: 'tween',
          duration: 0.5,
          delay: 0.5,
          easings: 'ease',
          repeatType: 'reverse',
        }}
        className={imageClass}
      >
        <img src={img} alt="invoice" className="w-full" />
      </motion.div>
    </div>
  );
};

export default Feature;
