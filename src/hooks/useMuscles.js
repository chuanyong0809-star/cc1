import { useState, useEffect, useMemo } from 'react';
import musclesData from '../data/muscles.json';

export function useMuscles() {
  const [muscles, setMuscles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMuscles(musclesData);
    setLoading(false);
  }, []);

  const getMusclesByRegion = (region) =>
    muscles.filter(m => m.region === region);

  const getMuscleById = (id) =>
    muscles.find(m => m.id === id) || null;

  const getRegions = useMemo(() => {
    const seen = new Map();
    muscles.forEach(m => {
      if (!seen.has(m.region)) {
        seen.set(m.region, { id: m.region, name: m.regionName });
      }
    });
    return [...seen.values()];
  }, [muscles]);

  return { muscles, loading, getMusclesByRegion, getMuscleById, getRegions };
}
