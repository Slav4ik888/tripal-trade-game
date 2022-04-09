import s from './index.module.css';

const Slider = () => {

  return (
    <section className={s.section}>
      <div className={s.slider}>
        <div className={s.container + ' ' + s.sliderContent}>
          <h1 className={s.header}>Wow</h1>
          <h2 className={s.subheader}>Wow.Wow.Wow</h2>
          <div className={s.call}>
            <button className={s.button}>Wow</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slider;
