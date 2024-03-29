import Link from 'next/link';
import { FC } from 'react';
import Image from 'next/image';
import MaterialIcon from '../MaterialIcon';
import { IIcon } from './About.interface';
import styles from './About.module.scss';
import first from '../../../assets/images/About/first.png';
import last from '../../../assets/images/About/4.png';
import second from '../../../assets/images/About/Second.png';
import third from '../../../assets/images/About/third.png';

const About: FC<{ icons: IIcon }> = ({ icons }) => (
  <section
    className={styles.About}
    id="about"
  >
    <div className={styles.content}>
      <div className={styles.title}>
        <h1>
          ДЕЛАЕМ ОКНА, КОТОРЫЕ
          <br />
          <span>СЛУЖАТ ДО 50 ЛЕТ</span>
        </h1>
        <div className={styles.leftAbsolute}>
          {` `}
          <h3>ЛЕТ</h3>
        </div>
        <div className={styles.rightAbsolute1}><h3>СЛУЖАТ ДО 50 ЛЕТ</h3></div>
        <div className={styles.rightAbsolute2}><h3>СЛУЖАТ ДО 50 ЛЕТ</h3></div>
      </div>
      <div className={styles.iconContainer}>
        {icons.items.map((item) => (
          <div
            key={item.link}
            className={styles.box}
          >
            <MaterialIcon name={item.icon} />
          </div>
        ))}
      </div>
      <p>
        <span>ИНВЕСТ-ТРЕЙД – </span>
        {` `}
        это поставщик оконного профиля из ПВХ и алюминия, оконной фурнитуры и
        комплектующих, оборудования для производства окон. Для наших клиентов мы, предлагаем
        полный комплекс услуг: начиная от поставки и наладки оборудования до снабжения всеми
        необходимыми для производства материалами и комплектующими, включая отработанную
        технологию производства.
        {` `}
      </p>
      <div className={styles.btn}>
        <Link
          href="/about"
          className={styles.button}
        >
          <span>Читать больше</span>
          <MaterialIcon name="MdReadMore" />
        </Link>
      </div>
    </div>
    <div className={styles.Cards}>
      <div className={styles.box}>

        <Image
          src={first}
          alt="first"
          draggable={false}
        />
      </div>
      <div className={styles.box}>
        <Image
          src={second}
          alt="second"
          draggable={false}
        />
      </div>
      <div className={styles.box}>
        <Image
          src={third}
          alt="third"
          draggable={false}
        />
      </div>
      <div className={styles.box}>
        <Image
          src={last}
          alt="last"
          draggable={false}
        />
      </div>
    </div>
  </section>
);

export default About;
