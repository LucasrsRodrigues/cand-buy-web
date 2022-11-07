import styles from '@/styles/components/SectionTitle.module.scss';

interface ISectionTitleProps {
  title: string;
  subtitle: string;
}


export default function SectionTitle({ title, subtitle }: ISectionTitleProps) {
  return (
    <div className={styles.modernHeader}>
      <div className="heading-secondary-wrap">
        <h6 className={styles.headingSecondary}>{title}</h6>
      </div>
      <div className="heading-primary-wrap">
        <h2 className="heading-primary elementor-heading-title">
          {subtitle}
        </h2>
      </div>
    </div>
  )
}