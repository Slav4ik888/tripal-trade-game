import React, { useEffect } from 'react';
import { Link, useNavigate, useParams, Navigate, useLocation } from 'react-router-dom';
import cn from 'classnames';
// Components
import Heading from '../../components/heading';
import Button from '../../components/btns/button';
import Text from '../../components/text';
// Styles & Consts & Types
import s from './index.module.scss';
import { ReactComponent as Anchor } from '../../assets/anchor.svg';
import { BIO } from '../../assets/bio';
import { btnType, Path } from '../../utils/types';


export const BiographyPage = () => {
  const
    navigate = useNavigate(),
    location = useLocation(),
    { id }   = useParams(),
    content  = BIO[id];

  
  const handleBack = () => navigate(`/`, {
    state: {
      from: id
    }
  });

  const handleAnchor = (e) => {
    const id = e.target.id;
    id && navigate(`${location.pathname}#${id}`);
  };

  const makeId = (item) => item?.text?.toLowerCase().replace(/\s/g, `-`) || '';


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
              case `h1`: return <Heading
                key={idx}
                id={makeId(item)} 
                onClick={handleAnchor}
                children={
                  <Link to={`#${makeId(item)}`} className={s.anchor}>
                    {`${item.text.toUpperCase()} `}
                    <Anchor />
                  </Link>
                }
              />;

              case `h2`: return <Heading
                key={idx}
                id={makeId(item)}
                level={2}
                onClick={handleAnchor}
                children={
                  <Link to={`#${makeId(item)}`}  className={s.anchor}>
                    {`${item.text.toUpperCase()} `}
                    <Anchor />
                  </Link>
                }
              />

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
