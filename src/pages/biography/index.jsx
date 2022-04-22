import React from 'react';
import pt from 'prop-types';
import cn from 'classnames';
// Components
import Button from '../../components/button';
import Heading from '../../components/heading';
import Text from '../../components/text';
// Styles & Consts & Types
import s from './index.module.scss';
import { BIO } from '../../assets/bio';
import { btnType } from '../../utils/types';



const Biography = ({ id, onBackClick }) => {

  const content = BIO[id];

  return (
    <div className={cn(s.root)}>
      <div className={s.btnBox}>
        <Button type={btnType.back} onClick={onBackClick}/>
      </div>
      <div className={s.content}>
        {
          content?.map((item, idx) => {
            switch (item.type) {
              case `h1`        : return <Heading key={idx} children={item.text.toUpperCase()} />;
              case `h2`        : return <Heading key={idx} level={2} children={item.text.toUpperCase()} />;
              case `paragraph` : return <Text key={idx} children={item.text} />;
              case `img`       : return <div key={idx} className={s.imgBox}><img src={item.src} alt="" className={s.img} /></div>
              
              default: return null;
            }
          })
        }
      </div>
    </div>
  )
};

Biography.propTypes = {
  id          : pt.number,
  onBackClick : pt.func
};

export default Biography;
