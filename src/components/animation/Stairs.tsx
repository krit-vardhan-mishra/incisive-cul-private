import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { usePathname } from 'next/navigation'
import { useRef, forwardRef, useImperativeHandle } from 'react'

interface StairsProps {
    children: React.ReactNode;
}

export interface StairsRef {
    playAnimation: () => void;
}

const Stairs = forwardRef<StairsRef, StairsProps>((props, ref) => {

    const currentPath = usePathname();

    const stairParentRef = useRef(null)
    const pageRef = useRef(null)

    const playAnimation = () => {
        const tl = gsap.timeline()
        tl.to(stairParentRef.current, {
            display: 'block',
        })
        tl.from('.stair', {
            height: 0,
            stagger: {
                amount: -0.2
            }
        })
        tl.to('.stair', {
            y: '100%',
            stagger: {
                amount: -0.25
            }
        })
        tl.to(stairParentRef.current, {
            display: 'none'
        })
        tl.to('.stair', {
            y: '0%',
        })

        gsap.from(pageRef.current, {
            opacity: 0,
            delay: 1.3,
            scale: 1.2
        })
    };

    useImperativeHandle(ref, () => ({
        playAnimation
    }));

    useGSAP(function () {
        playAnimation();
    }, [currentPath])


    return (
        <div>
            <div ref={stairParentRef} className='h-screen w-full fixed z-20 top-0'>
                <div className='h-full w-full flex'>
                    <div className='stair h-full w-1/5 bg-gray-800'></div>
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
});

Stairs.displayName = 'Stairs';

export default Stairs