import { useState, useMemo } from 'react';
import { useMuscles } from '../hooks/useMuscles';
import { REGION_ORDER, REGION_COLORS } from '../utils/regionHelpers';
import RegionNav from '../components/muscle/RegionNav';
import MuscleGroupSection from '../components/muscle/MuscleGroupSection';
import './MuscleListPage.css';

function SkeletonLoader() {
  return (
    <div className="muscle-list-skeleton">
      <div className="container">
        {REGION_ORDER.map(regionId => (
          <div key={regionId} className="muscle-list-skeleton__section">
            <div className="skeleton muscle-list-skeleton__title" />
            <div className="muscle-list-skeleton__grid">
              {[1, 2, 3].map(i => (
                <div key={i} className="skeleton muscle-list-skeleton__card" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MuscleListPage() {
  const { muscles, loading, getMusclesByRegion, getRegions } = useMuscles();
  const [activeRegion, setActiveRegion] = useState(null);

  const regions = useMemo(() => getRegions(), [getRegions]);

  const visibleRegions = useMemo(() => {
    if (activeRegion === null) return REGION_ORDER;
    return [activeRegion];
  }, [activeRegion]);

  if (loading) return <SkeletonLoader />;

  return (
    <div className="muscle-list-page">
      <div className="muscle-list-page__hero">
        <div className="container">
          <h1 className="muscle-list-page__title">肌肉图鉴</h1>
          <p className="muscle-list-page__subtitle">
            了解每一块肌肉的结构、功能与训练方法
          </p>
        </div>
      </div>

      <RegionNav
        regions={regions}
        activeRegion={activeRegion}
        onSelect={setActiveRegion}
      />

      <div className="container">
        {visibleRegions.map(regionId => {
          const regionMuscles = getMusclesByRegion(regionId);
          const region = regions.find(r => r.id === regionId);
          return (
            <MuscleGroupSection
              key={regionId}
              region={region}
              muscles={regionMuscles}
              regionColor={REGION_COLORS[regionId]}
            />
          );
        })}

        {visibleRegions.length === 0 && (
          <p style={{ textAlign: 'center', padding: '48px 0', color: 'var(--color-text-muted)' }}>
            未找到对应部位的肌肉数据
          </p>
        )}
      </div>
    </div>
  );
}
