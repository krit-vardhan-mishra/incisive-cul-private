'use client';

import gsap from 'gsap';
import { useRef, forwardRef, useImperativeHandle } from 'react'

const Stairs = forwardRef((props: any, ref) => {
    const stairParentRef = useRef(null)
    const pageRef = useRef(null)

    useImperativeHandle(ref, () => ({
        playAnimation() {
            const tl = gsap.timeline();

            // Show the parent container
            tl.set(stairParentRef.current, {
                display: 'block',
            })

            // Set initial state for stairs - positioned above the screen
            tl.set('.stair', {
                y: '-100%',
            })

            // Animate stairs sliding down from top to cover the screen
            tl.to('.stair', {
                y: '0%',
                duration: 0.6,
                ease: 'power2.out',
                stagger: {
                    amount: 0.15
                }
            })

            // Brief pause to show the full coverage
            tl.to({}, { duration: 0.2 })

            // Animate stairs sliding down to bottom (revealing content)
            tl.to('.stair', {
                y: '100%',
                duration: 0.6,
                ease: 'power2.in',
                stagger: {
                    amount: 0.15
                }
            })

            // Hide the parent container after animation completes
            tl.set(stairParentRef.current, {
                display: 'none'
            })
        }
    }));

    return (
        <div>
            <div ref={stairParentRef} className='h-screen w-full fixed z-20 top-0 hidden overflow-hidden'>
                <div className='h-full w-full flex'>
                    <div className='stair h-full w-1/5 bg-[#1f2d44]'></div>
                    <div className='stair h-full w-1/5 bg-[#253248]'></div>
                    <div className='stair h-full w-1/5 bg-[#354560]'></div>
                    <div className='stair h-full w-1/5 bg-[#1f2d44]'></div>
                    <div className='stair h-full w-1/5 bg-[#253248]'></div>
                </div>
            </div>
            <div ref={pageRef}>
                {props.children}
            </div>
        </div>
    )
})

Stairs.displayName = 'Stairs'

export default Stairs