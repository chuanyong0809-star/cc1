import { Link } from 'react-router-dom';
import './MuscleCard.css';

export default function MuscleCard({ muscle, regionColor }) {
  return (
    <Link
      to={`/muscles/${muscle.id}`}
      className="muscle-card"
      style={{ '--region-color': regionColor }}
    >
      <h3 className="muscle-card__name">{muscle.name}</h3>
      <p className="muscle-card__name-en">{muscle.nameEn}</p>
      <p className="muscle-card__function">
        {muscle.functions[0]}
      </p>
      <span className="muscle-card__arrow" aria-hidden="true">→</span>
    </Link>
  );
}
