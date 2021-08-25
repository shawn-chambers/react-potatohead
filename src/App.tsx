
import { useState } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { Controller, Scene } from 'react-scrollmagic';
import body from './images/Body.png';
import glasses from './images/Glasses.png';
import eyes from './images/Eyes.png';
import leftEar from './images/LeftEar.png';
import rightEar from './images/RightEar.png';
import mustache from './images/Mustache.png';
import rightArm from './images/RightArm.png';
import leftArm from './images/LeftArm.png';
import shoes from './images/Shoes.png';

const App = () => {
  const { scrollYProgress } = useViewportScroll();

  const moveEyes = useTransform(scrollYProgress, [0, .18, .25], [-2000, -500, 0]);
  const moveRightEar = useTransform(scrollYProgress, [0, .4], [-2000, 0]);
  const moveLeftEar = useTransform(scrollYProgress, [0, .4], [2000, 0]);
  const moveRightArm = useTransform(scrollYProgress, [0, .5], [-2000, 0]);
  const moveLeftArm = useTransform(scrollYProgress, [0, .5], [2000, 0]);
  const moveMustache = useTransform(scrollYProgress, [.1, .2, .3], [2000, 1000, 0]);
  const moveShoes = useTransform(scrollYProgress, [0, .65], [2000, 0]);
  const moveGlasses = useTransform(scrollYProgress, [.5, .6, .75], [-2000, -1000, 0]);
  const expand = useTransform(scrollYProgress, [.2, .75], ['0%', '100%']);

  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(prev => !prev);

  return (
    <>
      <Controller>
        <Scene
          triggerElement={"#sticky"}
          triggerHook={'onLeave'}
          duration={2000}
          pin={true}
        >
          <section id='sticky'>
            <motion.img id='body' src={body} alt='potato' />
            <motion.img id='leftEar' src={leftEar} alt='potato'
              style={{
                x: moveLeftEar
              }}
            />
            <motion.img id='rightEar' src={rightEar} alt='potato'
              style={{
                x: moveRightEar
              }}
            />
            <motion.img
              id='mustache' src={mustache} alt='potato'
              onMouseEnter={toggleHover}
              onMouseLeave={toggleHover}
              className={hovered ? 'hover' : ''}
              style={{
                y: moveMustache
              }}
            />
            <motion.img id='rightArm' src={rightArm} alt='potato'
              style={{
                y: moveRightArm
              }}
            />
            <motion.img id='leftArm' src={leftArm} alt='potato'
              style={{
                y: moveLeftArm
              }}
            />
            <motion.img
              id='eyes' src={eyes} alt='potato'
              style={{
                y: moveEyes
              }}
            />
            <motion.img id='glasses' src={glasses} alt='potato'
              style={{
                y: moveGlasses
              }}
            />
            <motion.img id='shoes' src={shoes} alt='potato'
              style={{
                y: moveShoes
              }}
            />
            <motion.div
              className="bar"
              style={{
                position: 'relative',
                top: '90%',
                height: '15px',
                backgroundColor: 'black',
                width: expand,
                zIndex: -1
              }}
            />
          </section>
        </Scene>
      </Controller>
    </>
  )
}

export default App