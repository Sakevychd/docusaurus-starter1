import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Легкий у використанні',
    Svg: require('@site/static/img/3.svg').default,
    description: (
      <>
        Товарчик - це сайт, який пропонує все легко та надійно. Тому замовляй!
      </>
    ),
  },
  {
    title: 'Праця для людей',
    Svg: require('@site/static/img/2.svg').default,
    description: (
      <>
       Наща праця благородна та чесна, тільки найвища якість та крута ціна
      </>
    ),
  },
  {
    title: 'Атмосфера та Затишок',
    Svg: require('@site/static/img/1.svg').default,
    description: (
      <>
        Зроби своє житло, щоб був комфорт від одного погляду  
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

