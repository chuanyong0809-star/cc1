import { useState, useEffect, useMemo } from 'react';
import exercisesData from '../data/exercises.json';

export function useExercises() {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setExercises(exercisesData);
    setLoading(false);
  }, []);

  const getExercisesByMuscleId = (muscleId) =>
    exercises.filter(
      e =>
        e.primaryMuscleIds.includes(muscleId) ||
        e.secondaryMuscleIds.includes(muscleId)
    );

  const getExerciseById = (id) =>
    exercises.find(e => e.id === id) || null;

  const getPrimaryExercises = (muscleId) =>
    exercises.filter(e => e.primaryMuscleIds.includes(muscleId));

  const getSecondaryExercises = (muscleId) =>
    exercises.filter(
      e =>
        !e.primaryMuscleIds.includes(muscleId) &&
        e.secondaryMuscleIds.includes(muscleId)
    );

  const getAllEquipment = useMemo(() => {
    const set = new Set(exercises.map(e => e.equipment));
    return [...set].sort();
  }, [exercises]);

  const getDifficulties = () => [
    { id: 'beginner', name: '初级' },
    { id: 'intermediate', name: '中级' },
    { id: 'advanced', name: '高级' },
  ];

  return {
    exercises,
    loading,
    getExercisesByMuscleId,
    getExerciseById,
    getPrimaryExercises,
    getSecondaryExercises,
    getAllEquipment,
    getDifficulties,
  };
}
