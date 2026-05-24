import { REGION_ORDER, REGION_COLORS } from '../../utils/regionHelpers';
import './RegionNav.css';

export default function RegionNav({ regions, activeRegion, onSelect }) {
  return (
    <nav className="region-nav" aria-label="按部位筛选">
      <div className="container">
        <div className="region-nav__list">
          <button
            className={`region-nav__pill ${activeRegion === null ? 'region-nav__pill--active' : ''}`}
            style={activeRegion === null ? { '--accent-color': '#888' } : {}}
            onClick={() => onSelect(null)}
          >
            全部
          </button>
          {REGION_ORDER.map(regionId => {
            const region = regions.find(r => r.id === regionId);
            if (!region) return null;
            const isActive = activeRegion === regionId;
            return (
              <button
                key={regionId}
                className={`region-nav__pill ${isActive ? 'region-nav__pill--active' : ''}`}
                style={isActive ? { '--accent-color': REGION_COLORS[regionId] } : {}}
                onClick={() => onSelect(isActive ? null : regionId)}
              >
                {region.name}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
