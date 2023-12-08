import { Section, Title2, StatList, StatItem } from './Statistic.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title2>{title}</Title2>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </StatItem>
        ))}
      </StatList>
    </Section>
  );
};
