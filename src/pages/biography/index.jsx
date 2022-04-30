import React from 'react';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import cn from 'classnames';
// Components
import Heading from '../../components/heading';
import Button from '../../components/button';
import Text from '../../components/text';
// Styles & Consts & Types
import s from './index.module.scss';
import { BIO } from '../../assets/bio';
import { btnType, Path } from '../../utils/types';


export const Biography = () => {
  const
    navigate = useNavigate(),
    { id }   = useParams(),
    content  = BIO[id];

  const handleBack = () => navigate(`/`, {
    state: {
      from: id
    }
  });

  if (!content) return <Navigate to={`/${Path.CHARACTERS}`} replace />

  return (
    <div className={cn(s.root)}>
      <div>
        <Button type={btnType.back} onClick={handleBack} />
      </div>
      <div className={s.content}>
        {
          content.map((item, idx) => {
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
    </div>
  )
};

export default Biography;
