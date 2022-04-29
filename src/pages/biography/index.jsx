import React from 'react';
import { useParams } from 'react-router-dom';
import cn from 'classnames';
// Components
import Container from '../../components/container';
import Heading from '../../components/heading';
import Text from '../../components/text';
// Styles & Consts & Types
import s from './index.module.scss';
import { BIO } from '../../assets/bio';



export const Biography = () => {
  const
    { id }   = useParams(),
    idx      = id || 1011334,
    content  = BIO[idx];

  return (
    <div className={cn(s.root)}>
      <Container>
        <div className={s.content}>
          {
            content?.map((item, idx) => {
              switch (item.type) {
                case `h1`        : return <Heading key={idx} children={item.text.toUpperCase()} />;
                case `h2`        : return <Heading key={idx} level={2} children={item.text.toUpperCase()} />;
                case `paragraph` : return <Text key={idx} children={item.text} />;
                case `img`       : return <div key={idx} className={s.imgWrap}><img src={item.src} alt="" className={s.img} /></div>
                
                default: return <Text key={idx} children={item.text} />;
              }
            })
          }
        </div>
      </Container>
    </div>
  )
};

export default Biography;
