import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import lottie from 'lottie-web'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../hooks/font-awesome';
import './heroanimation.scss'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(ScrollToPlugin)
  gsap.config({
    nullTargetWarn: false,
  })
  ScrollTrigger.defaults({
    start: 'top top',
    end: 'bottom top',
    // markers: true,
  })

  // On page reload, scroll to top so animation reruns
  window.addEventListener('beforeunload', () => {
    console.log('beforeunload: ' + Date.now());
    document.getElementsByTagName('body')[0].style.display = 'none'
    window.scrollTo(0, 0)
  })
}

const Heroanimation = ({children}) => {

  const animations = [
    {
      data: require('../../animations/c3-line.json'),
      headline: (
        <h2>
          Tailored<strong>Strategy</strong>
        </h2>
      ),
    },
    {
      data: require('../../animations/c3-dots.json'),
      headline: (
        <h2>
          Beautiful<strong>Design</strong>
        </h2>
      ),
    },
    {
      data: require('../../animations/c3-bars.json'),
      headline: (
        <h2>
          Expert<strong>Development</strong>
        </h2>
      ),
    },
    {
      data: require('../../animations/c3-liquid.json'),
      headline: (
        <h2>
          Customized<strong>Support</strong>
        </h2>
      ),
    },
  ]

  const finalAnimation = (
    <div>
      <h1>
        Drupal<strong>Experts</strong>
      </h1>
      <p>
        We are a full-service digital agency.
      </p>
      <a className="button" href="/work">See Our Work</a>
    </div>
  )

  // Hold references for animations
  const animationRefs = useRef([])
  const addAnimationToRefs = el => {
    if (el && !animationRefs.current.includes(el)) {
      animationRefs.current.push(el)
    }
  }

  // Run only once
  const mount = () => {
    // Force scroll to top so animation reruns
    window.scrollTo(0, 0)

    // Lottie animations
    let lotties = []

    // Is the header pinned?
    let isPinned = false

    // Transition from one animation to another
    let transition
    function transitionAnims(options) {
      isPinned && transition && transition.progress(1).kill()
      transition = gsap
        .timeline({ defaults: { duration: 0.2 } })
        // Fade out outgoing animation/text
        .to(options.outAnimation, { autoAlpha: 0, duration: 0.5 })
        .to(options.outText, { autoAlpha: 0 }, '<')
        // Update dots
        .to('.dot', { backgroundColor: 'rgba(0, 164, 175, 0)', borderColor: 'rgba(151, 151, 151, 1)' }, '<')
        .to(options.inDot, { backgroundColor: 'rgba(0, 164, 175, 1)', borderColor: 'rgba(0, 164, 175, 1)'  }, '<')
        // Animate incoming animation/text
        .to(options.inAnimation, {
          autoAlpha: 1,
          duration: 0.5,
          onStart: () => options.inLottie?.goToAndPlay(0, true),
        })
        .to(options.inText, { autoAlpha: 1, y: '-20px', duration: 0.5, ease: 'power4.out' })
        // Reset outgoing text
        .to(options.outText, { y: '0px' })
    }

    // Setup Lottie animations
    animations.forEach((animation, index) => {
      let ani = {
        container: animationRefs.current[index],
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: animations[index].data,
      }
      lotties.push(lottie.loadAnimation(ani))
    })

    // Pin header
    const pinHeader = () => {
      ScrollTrigger.create({
        trigger: '.heroanimation__scrollers',
        start: 'top top',
        pin: '.heroanimation__wrapper',
        onEnter: () => {
          isPinned = true
        },
        onEnterBack: () => {
          isPinned = true
        },
        onLeave: () => {
          isPinned = false
        },
      })
    }

    // From animation to animation, in either direction
    const setupAnimations = () => {
      animations.forEach((animation, index) => {
        // No out animations on the first
        if (index === 0) {
          // Always load anim1/headline1/dot1
          transitionAnims({
            outAnimation: null,
            inAnimation: animationRefs.current[0],
            inText: '.headline0',
            inLottie: lotties[0],
            inDot: '.dot0',
          })

          return
        }

        ScrollTrigger.create({
          trigger: '.scroller' + index,
          onEnter: () => {
            transitionAnims({
              outAnimation: '.anim' + (index - 1),
              outText: null,
              inAnimation: '.anim' + index,
              inText: '.headline' + index,
              inLottie: lotties[index],
              inDot: '.dot' + index,
            })
          },
          onLeaveBack: self => self.disable(),
        })
      })
    }

    // Final animation
    const setupFinalAnimation = () => {
      ScrollTrigger.create({
        trigger: '.scroller-final',
        onEnter: () => {
          transitionAnims({
            outAnimation: '.anims-headlines',
            outText: null,
            inAnimation: '.anim-final',
            inText: null,
            inLottie: null,
            inDot: '.dot-final',
          })
           isPinned && gsap.timeline({ delay: 0.5, defaults: { opacity: 0, duration: 0.6, ease: 'power4.out' } })
            .from('.anim-final h1', { y: -20 })
            .from('.anim-final p', { y: 20 }, '<')
            .from('.anim-final a', { y: 20 }, '<0.2')
        },
        onLeaveBack: self => self.disable(),
      })
    }

    // Run all the stuff if on wider screen
    const animMobile = document.getElementsByClassName('anim-mobile')[0]
    ScrollTrigger.matchMedia({
      '(max-width: 991.98px)': function() {
        gsap.to('.anim-mobile', { autoAlpha: 1 })
      },
      '(min-width: 992px)': function() {
        if (parseInt(animMobile.style.opacity) === 1) {
          gsap.to('.anim-mobile', { autoAlpha: 0, duration: 0 })
        }
        pinHeader()
        setupAnimations()
        setupFinalAnimation()
      }
    })

    // Next arrow scroller
    const nextArrow = document.getElementById('next-arrow');
    nextArrow.addEventListener('click', () => {
      isPinned = false
      transition && transition.progress(1).kill()
      gsap.to(window, {duration: 1, scrollTo: '.top__content'});
    });
  }

  useEffect(mount, [])

  return (
    <div>
      <div className="heroanimation__wrapper">
        {children}
        <div className="heroanimation">
          <div className="anims-headlines__wrapper">
            <div className="anims-headlines">
              <div className="anims">
                {animations.map((animation, index) => (
                  <div
                    className={'anim anim' + index}
                    key={index}
                    ref={addAnimationToRefs}
                  ></div>
                ))}
              </div>

              <div className="headlines">
                {animations.map((animation, index) => (
                  <div className={'headline headline' + index} key={index}>
                    {animation.headline}
                  </div>
                ))}
              </div>
            </div>

            <div className="anim-final">
              {finalAnimation}
            </div>

            <div className="anim-mobile">
              {finalAnimation}
            </div>

            <div className="dots">
              {animations.map((animation, index) => (
                <div className={'dot dot' + index} key={index}></div>
              ))}
              <div className="dot dot-final"></div>
            </div>
          </div>

          <div className="next-arrow" id="next-arrow">
            <FontAwesomeIcon icon={["fas", "arrow-circle-down"]} />
          </div>
        </div>
      </div>

      <div className="heroanimation__scrollers">
        {animations.map((animation, index) => (
          <div className={'scroller scroller' + index} key={index}></div>
        ))}
        <div className="scroller scroller-final"></div>
      </div>
    </div>
  )
}

Heroanimation.propTypes = {
  children: PropTypes.node.isRequired
}

export default Heroanimation
