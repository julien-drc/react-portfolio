import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Dot, Kunais } from '../components/AllSvgs';

const Container = styled.div`
position: relative;
`
const Slider = styled.div`
position: fixed;
top: 0;
right: 2rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
transform: translateY(-100%);

.chain{
  transform: rotate(135deg);
}
`
const PreDisplay = styled.div`
position: absolute;
top: 0;
right: 2rem;
`


const Kunai = (props) => {

const ref = useRef(0);
    const hiddenRef = useRef(null);

    useEffect(() => {
      let element = ref.current
      let el = hiddenRef.current

        const handleScroll = () => {

            let scrollPosition = window.pageYOffset;
            let windowSize = window.innerHeight;
            let bodyHeight = document.body.offsetHeight;

            let diff = Math.max(bodyHeight - (scrollPosition + windowSize) )
            let diffP = (diff * 100) / (bodyHeight - windowSize);
            console.log(ref);

            element.style.transform = `translateY(${-diffP}%)`


            if(window.pageYOffset > 5){
                el.style.display = 'none'
            }else{
                el.style.display = 'block'

            }
        }

        window.addEventListener('scroll', handleScroll)


       return () =>  window.removeEventListener('scroll', handleScroll)


    }, [])


  return <Container>
    <PreDisplay ref={hiddenRef} className='hidden'>
      <Kunais width={70} height={70} fill='currentColot' />
    </PreDisplay>
    <Slider ref={ref}>
      {
        [...Array(props.numbers)].map((x,id) => {
          return <Dot key={id} width={25} height={25} fill='currentColot' className="chain" />
        })
      }
      <Kunais width={70} height={70} fill='currentColot' />
    </Slider>

  </Container>;
};

export default Kunai;
