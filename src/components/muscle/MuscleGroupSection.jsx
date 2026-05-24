import MuscleCard from './MuscleCard';
import './MuscleGroupSection.css';

export default function MuscleGroupSection({ region, muscles, regionColor }) {
  return (
    <section id={region.id} className="muscle-group-section">
      <div className="muscle-group-section__header">
        <h2 className="muscle-group-section__title">{region.name}</h2>
        <span className="muscle-group-section__count">
          {muscles.length} 块肌肉
        </span>
      </div>
      <div className="muscle-group-section__grid">
        {muscles.map(muscle => (
          <MuscleCard
            key={muscle.id}
            muscle={muscle}
            regionColor={regionColor}
          />
        ))}
      </div>
    </section>
  );
}
