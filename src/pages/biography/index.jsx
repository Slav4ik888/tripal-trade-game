import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import pt from 'prop-types';
import cn from 'classnames';
// Components
import Container from '../../components/container';
import Button from '../../components/button';
import Heading from '../../components/heading';
import Text from '../../components/text';
// Styles & Consts & Types
import s from './index.module.scss';
import { BIO } from '../../assets/bio';
import { btnType, Path } from '../../utils/types';



export const Biography = ({ onBackClick }) => {
  const
    { id }   = useParams(),
    navigate = useNavigate(),
    content  = BIO[id];

  const handleBackClick = () => {
    onBackClick ? onBackClick() : navigate(Path.MAIN);
  };

  return (
    <div className={cn(s.root)}>
      <Container>
        <div className={s.btnWrap}>
          <Button type={btnType.back} onClick={handleBackClick}/>
        </div>

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

Biography.propTypes = {
  onBackClick : pt.func
};

export default Biography;
