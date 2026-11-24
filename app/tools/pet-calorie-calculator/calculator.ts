export type Species = 'dog' | 'cat';
export type WeightUnit = 'lbs' | 'kg';

export interface LifeStageOption {
  id: string;
  species: Species;
  label: string;
  factor: number;
  note: string;
}

// 与 PawOptima Steward 基础默认中度系数 100% 同步（网页端锁定维持目标 × 1.0）
export const LIFE_STAGE_OPTIONS: LifeStageOption[] = [
  // Dogs
  {
    id: 'dog_adult_neutered',
    species: 'dog',
    label: 'Adult Dog — Neutered / Spayed (Average Activity)',
    factor: 1.6,
    note: 'Standard moderate maintenance baseline (1.6× RER).',
  },
  {
    id: 'dog_adult_intact',
    species: 'dog',
    label: 'Adult Dog — Intact (Average Activity)',
    factor: 1.8,
    note: 'Standard moderate maintenance baseline for intact adults (1.8× RER).',
  },
  {
    id: 'dog_puppy',
    species: 'dog',
    label: 'Puppy — Growing (General Baseline)',
    factor: 2.0,
    note: 'General baseline (2.0× RER). Large & giant breed puppies need growth-rate pacing in the app.',
  },
  {
    id: 'dog_senior',
    species: 'dog',
    label: 'Senior Dog (Typical Maintenance)',
    factor: 1.2,
    note: 'Typical senior maintenance baseline (1.2× RER). Underweight seniors may require higher intake.',
  },

  // Cats
  {
    id: 'cat_adult_neutered',
    species: 'cat',
    label: 'Adult Cat — Neutered / Spayed (Indoor)',
    factor: 1.2,
    note: 'Standard moderate maintenance baseline for neutered cats (1.2× RER).',
  },
  {
    id: 'cat_adult_intact',
    species: 'cat',
    label: 'Adult Cat — Intact',
    factor: 1.4,
    note: 'Standard moderate maintenance baseline for intact adult cats (1.4× RER).',
  },
  {
    id: 'cat_kitten_under_4m',
    species: 'cat',
    label: 'Kitten — Under 4 Months',
    factor: 2.5,
    note: 'Rapid early growth stage baseline (2.5× RER).',
  },
  {
    id: 'cat_kitten_4_12m',
    species: 'cat',
    label: 'Kitten — 4 to 12 Months',
    factor: 2.0,
    note: 'Mid-to-late kitten growth baseline (2.0× RER).',
  },
  {
    id: 'cat_senior',
    species: 'cat',
    label: 'Senior Cat (Typical Maintenance)',
    factor: 1.1,
    note: 'Typical senior baseline (1.1× RER). Cats over 11 years often need higher energy support.',
  },
];

export const LB_TO_KG = 0.45359237;

export interface CalorieResult {
  weightKg: number;
  rer: number;
  der: number;
  mainMealKcal: number;
  treatLimitKcal: number;
  factor: number;
  stage: LifeStageOption;
}

export function getStagesBySpecies(species: Species): LifeStageOption[] {
  return LIFE_STAGE_OPTIONS.filter((opt) => opt.species === species);
}

export function getDefaultStageId(species: Species): string {
  return species === 'dog' ? 'dog_adult_neutered' : 'cat_adult_neutered';
}

export function calculatePetCalories(
  weightValue: number,
  unit: WeightUnit,
  stageId: string
): CalorieResult | null {
  if (!Number.isFinite(weightValue) || weightValue <= 0) {
    return null;
  }

  const stage =
    LIFE_STAGE_OPTIONS.find((opt) => opt.id === stageId) ||
    LIFE_STAGE_OPTIONS[0];

  const weightKg = unit === 'lbs' ? weightValue * LB_TO_KG : weightValue;

  // 限制极端无效输入范围（0.2kg ~ 150kg）
  if (weightKg < 0.2 || weightKg > 150) {
    return null;
  }

  const rawRer = 70 * Math.pow(weightKg, 0.75);
  const rer = Math.round(rawRer);
  const der = Math.round(rawRer * stage.factor);
  const mainMealKcal = Math.round(der * 0.9);
  const treatLimitKcal = Math.max(0, der - mainMealKcal);

  return {
    weightKg,
    rer,
    der,
    mainMealKcal,
    treatLimitKcal,
    factor: stage.factor,
    stage,
  };
}