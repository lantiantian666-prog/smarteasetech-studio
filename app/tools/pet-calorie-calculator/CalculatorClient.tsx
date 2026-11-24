'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  calculatePetCalories,
  getDefaultStageId,
  getStagesBySpecies,
  LB_TO_KG,
  LIFE_STAGE_OPTIONS,
  type Species,
  type WeightUnit,
} from './calculator';

export default function CalculatorClient() {
  const [species, setSpecies] = useState<Species>('dog');
  const [unit, setUnit] = useState<WeightUnit>('lbs');
  const [weightInput, setWeightInput] = useState<string>('25');
  const [stageId, setStageId] = useState<string>('dog_adult_neutered');
  const [copied, setCopied] = useState<boolean>(false);

  // 支持从分享链接读取初始参数（零 SSR 水合报错）
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const qSpecies = params.get('species');
    const qUnit = params.get('unit');
    const qWeight = params.get('weight');
    const qStage = params.get('stage');

    let resolvedSpecies: Species = 'dog';
    if (qSpecies === 'cat' || qSpecies === 'dog') {
      resolvedSpecies = qSpecies;
      setSpecies(qSpecies);
    }

    if (qUnit === 'kg' || qUnit === 'lbs') {
      setUnit(qUnit);
    }

    if (qWeight && !Number.isNaN(Number(qWeight)) && Number(qWeight) > 0) {
      setWeightInput(qWeight);
    } else if (resolvedSpecies === 'cat') {
      setWeightInput('10');
    }

    if (
      qStage &&
      LIFE_STAGE_OPTIONS.some(
        (opt) => opt.id === qStage && opt.species === resolvedSpecies
      )
    ) {
      setStageId(qStage);
    } else {
      setStageId(getDefaultStageId(resolvedSpecies));
    }
  }, []);

  const stageOptions = getStagesBySpecies(species);
  const parsedWeight = parseFloat(weightInput);
  const result = calculatePetCalories(parsedWeight, unit, stageId);

  function handleSpeciesChange(nextSpecies: Species) {
    if (nextSpecies === species) return;
    setSpecies(nextSpecies);
    setStageId(getDefaultStageId(nextSpecies));
    // 切换猫狗时给一个贴合日常的默认参考体重
    if (nextSpecies === 'cat') {
      setWeightInput(unit === 'lbs' ? '10' : '4.5');
    } else {
      setWeightInput(unit === 'lbs' ? '25' : '11.3');
    }
  }

  function handleUnitChange(nextUnit: WeightUnit) {
    if (nextUnit === unit) return;
    const current = parseFloat(weightInput);
    if (Number.isFinite(current) && current > 0) {
      const converted =
        nextUnit === 'kg' ? current * LB_TO_KG : current / LB_TO_KG;
      setWeightInput(converted.toFixed(1));
    }
    setUnit(nextUnit);
  }

  async function handleCopyShareLink() {
    const url = new URL(window.location.href);
    url.searchParams.set('species', species);
    url.searchParams.set('weight', weightInput);
    url.searchParams.set('unit', unit);
    url.searchParams.set('stage', stageId);

    try {
      await navigator.clipboard.writeText(url.toString());
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.history.replaceState({}, '', url.toString());
    }
  }

  return (
    <div className="space-y-8">
      {/* 计算器主体：左输入、右结果 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* 左侧：3 步极简输入面板 */}
        <section className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#05221b]/60 border border-emerald-900/50 backdrop-blur-sm space-y-6 shadow-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white">1. Pet Profile</h2>
            <span className="text-xs text-emerald-300/80 font-medium">
              Maintenance Baseline (× 1.0)
            </span>
          </div>

          {/* 物种选择 */}
          <div className="space-y-2">
            <label className="block text-xs font-medium uppercase tracking-wider text-slate-400">
              Species
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleSpeciesChange('dog')}
                className={`py-3 px-4 rounded-2xl border text-sm font-semibold transition-all cursor-pointer ${
                  species === 'dog'
                    ? 'bg-emerald-600 text-white border-emerald-400 shadow-lg shadow-emerald-900/40'
                    : 'bg-slate-950/60 text-slate-300 border-emerald-900/40 hover:border-emerald-500/40'
                }`}
              >
                Dog
              </button>
              <button
                type="button"
                onClick={() => handleSpeciesChange('cat')}
                className={`py-3 px-4 rounded-2xl border text-sm font-semibold transition-all cursor-pointer ${
                  species === 'cat'
                    ? 'bg-emerald-600 text-white border-emerald-400 shadow-lg shadow-emerald-900/40'
                    : 'bg-slate-950/60 text-slate-300 border-emerald-900/40 hover:border-emerald-500/40'
                }`}
              >
                Cat
              </button>
            </div>
          </div>

          {/* 体重与单位切换 */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="pet-weight"
                className="block text-xs font-medium uppercase tracking-wider text-slate-400"
              >
                Current Body Weight
              </label>
              <div className="inline-flex rounded-full bg-slate-950/80 border border-emerald-900/50 p-0.5 text-xs">
                <button
                  type="button"
                  onClick={() => handleUnitChange('lbs')}
                  className={`px-3 py-1 rounded-full font-medium transition-colors cursor-pointer ${
                    unit === 'lbs'
                      ? 'bg-emerald-600 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  lbs
                </button>
                <button
                  type="button"
                  onClick={() => handleUnitChange('kg')}
                  className={`px-3 py-1 rounded-full font-medium transition-colors cursor-pointer ${
                    unit === 'kg'
                      ? 'bg-emerald-600 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  kg
                </button>
              </div>
            </div>

            <div className="relative">
              <input
                id="pet-weight"
                type="number"
                inputMode="decimal"
                min="0.5"
                max={unit === 'lbs' ? '330' : '150'}
                step="0.1"
                value={weightInput}
                onChange={(e) => setWeightInput(e.target.value)}
                placeholder={unit === 'lbs' ? 'e.g. 25' : 'e.g. 11.3'}
                className="w-full rounded-2xl bg-slate-950/80 border border-emerald-900/50 focus:border-emerald-400 focus:outline-none px-4 py-3.5 pr-14 text-lg font-semibold text-white placeholder:text-slate-600"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-400">
                {unit}
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Assumes ideal body condition (BCS 4–5/9). Overweight pets should
              be calculated using ideal target weight.
            </p>
          </div>

          {/* 生命阶段选择 */}
          <div className="space-y-2">
            <label
              htmlFor="life-stage"
              className="block text-xs font-medium uppercase tracking-wider text-slate-400"
            >
              Life Stage
            </label>
            <select
              id="life-stage"
              value={stageId}
              onChange={(e) => setStageId(e.target.value)}
              className="w-full rounded-2xl bg-slate-950/80 border border-emerald-900/50 focus:border-emerald-400 focus:outline-none px-4 py-3.5 text-sm font-medium text-white"
            >
              {stageOptions.map((opt) => (
                <option key={opt.id} value={opt.id} className="bg-slate-950">
                  {opt.label}
                </option>
              ))}
            </select>
            {result && (
              <p className="text-xs text-slate-400 leading-relaxed">
                {result.stage.note}
              </p>
            )}
          </div>

          {/* 专业边界提示：将复杂生理期和减重安全导向 App */}
          <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-xs text-slate-300 leading-relaxed">
            <span className="font-semibold text-amber-300">
              Need weight loss, pregnancy/lactation, or working-dog math?
            </span>{' '}
            These stages require ideal-weight BCS adjustments, weekly growth or
            gestation scaling, and feline hepatic lipidosis safety limits —
            available inside{' '}
            <Link
              href="/apps/pawoptima"
              className="text-emerald-300 underline underline-offset-2 hover:text-emerald-200"
            >
              PawOptima Steward
            </Link>
            .
          </div>
        </section>

        {/* 右侧：实时结果面板 */}
        <section className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#05221b]/60 border border-emerald-500/30 backdrop-blur-sm shadow-2xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-emerald-300">
                  Estimated Daily Maintenance Energy (DER)
                </p>
                {result ? (
                  <div className="mt-2 flex items-baseline gap-2.5">
                    <span className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white">
                      {result.der.toLocaleString()}
                    </span>
                    <span className="text-lg font-medium text-emerald-300">
                      kcal / day
                    </span>
                  </div>
                ) : (
                  <p className="mt-2 text-lg text-amber-300 font-medium">
                    Enter a valid weight between 0.5 and 330 lbs (0.2–150 kg).
                  </p>
                )}
              </div>

              {result && (
                <button
                  type="button"
                  onClick={handleCopyShareLink}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-xs font-medium text-emerald-200 transition-colors cursor-pointer"
                >
                  {copied ? '✓ Link Copied' : 'Copy Result Link'}
                </button>
              )}
            </div>

            {result && (
              <>
                {/* 透明公式与静息代谢拆解 */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-emerald-900/40">
                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-emerald-900/40">
                    <p className="text-xs text-slate-400">
                      Resting Energy (RER)
                    </p>
                    <p className="mt-1 text-xl font-bold text-white">
                      {result.rer.toLocaleString()}{' '}
                      <span className="text-xs font-normal text-slate-400">
                        kcal
                      </span>
                    </p>
                    <p className="mt-1 text-[11px] text-slate-500 font-mono">
                      70 × ({result.weightKg.toFixed(1)} kg)^0.75
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-emerald-900/40">
                    <p className="text-xs text-slate-400">
                      Main Meals (90%)
                    </p>
                    <p className="mt-1 text-xl font-bold text-emerald-300">
                      {result.mainMealKcal.toLocaleString()}{' '}
                      <span className="text-xs font-normal text-slate-400">
                        kcal
                      </span>
                    </p>
                    <p className="mt-1 text-[11px] text-slate-500">
                      Complete &amp; balanced food
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-emerald-900/40">
                    <p className="text-xs text-slate-400">
                      Treat Cap (Max 10%)
                    </p>
                    <p className="mt-1 text-xl font-bold text-amber-300">
                      {result.treatLimitKcal.toLocaleString()}{' '}
                      <span className="text-xs font-normal text-slate-400">
                        kcal
                      </span>
                    </p>
                    <p className="mt-1 text-[11px] text-slate-500">
                      Snacks, chews &amp; toppers
                    </p>
                  </div>
                </div>

                {/* 90/10 视觉比例条 */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>90% Balanced Meals</span>
                    <span>10% Max Treats</span>
                  </div>
                  <div className="h-3 w-full rounded-full overflow-hidden bg-slate-950 flex border border-emerald-900/50">
                    <div
                      className="bg-emerald-500 h-full"
                      style={{ width: '90%' }}
                    />
                    <div
                      className="bg-amber-400 h-full"
                      style={{ width: '10%' }}
                    />
                  </div>
                </div>

                <p className="text-xs text-slate-500 font-mono">
                  Formula: {result.rer} kcal (RER) × {result.factor.toFixed(1)}{' '}
                  (Stage Factor) × 1.0 (Maintenance) = {result.der} kcal/day
                </p>
              </>
            )}
          </div>

          {/* 场景化转化卡：把“换算自家宠粮克数 + 长期记录 + 急救 + PDF报告”全部导给 PawOptima Steward */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#062b22] via-[#05221b] to-slate-950 border border-emerald-500/35 shadow-2xl space-y-5">
            <div className="flex items-start gap-4">
              <Image
                src="/pawoptima-icon.png"
                alt="PawOptima Steward iOS app icon"
                width={56}
                height={56}
                className="rounded-2xl border border-emerald-500/30 shadow-md shrink-0"
              />
              <div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/25 text-[11px] font-medium">
                  Next Step · Turn Calories Into Exact Daily Portions
                </span>
                <h3 className="mt-1.5 text-xl font-bold text-white">
                  {result
                    ? `Ready to turn ${result.der.toLocaleString()} kcal/day into exact grams & cups?`
                    : 'Turn Daily Calories Into Exact Grams & Health Tracking'}
                </h3>
                <p className="mt-1 text-sm text-slate-300 font-light leading-relaxed">
                  Try{' '}
                  <strong className="text-white font-semibold">
                    PawOptima Steward
                  </strong>{' '}
                  free on iOS with our built-in food database and 7-day log
                  preview — 100% offline with zero account required.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200 pt-1">
              <div className="p-3 rounded-xl bg-slate-950/50 border border-emerald-900/40">
                <strong className="text-emerald-300 block mb-0.5">
                  Custom Foods &amp; OCR Label Scan
                </strong>
                Add your own kibble, wet food &amp; homemade recipes, or scan
                nutrition bags locally with your camera.
              </div>
              <div className="p-3 rounded-xl bg-slate-950/50 border border-emerald-900/40">
                <strong className="text-emerald-300 block mb-0.5">
                  200+ Breed Curves &amp; Safe Weight Loss
                </strong>
                Ideal-weight BCS targeting, daily water goals, plus feline
                hepatic lipidosis &amp; canine rate alerts.
              </div>
              <div className="p-3 rounded-xl bg-slate-950/50 border border-emerald-900/40">
                <strong className="text-emerald-300 block mb-0.5">
                  150+ Offline Toxin Emergency Lookup
                </strong>
                Instant offline check for toxic foods, plants, and household
                hazards when every minute counts.
              </div>
              <div className="p-3 rounded-xl bg-slate-950/50 border border-emerald-900/40">
                <strong className="text-emerald-300 block mb-0.5">
                  Pro PDF Reports &amp; Family Sharing
                </strong>
                Export vet-ready PDF health reports, sync across up to 6 devices
                on LAN, plus Lifetime Family Sharing.
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://apps.apple.com/app/id6782809353"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-7 py-3 rounded-full text-sm font-semibold shadow-lg transition-colors"
              >
                <span>Download PawOptima Steward (iOS)</span>
                <span>&rarr;</span>
              </a>
              <Link
                href="/apps/pawoptima"
                className="inline-flex items-center px-5 py-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-200 text-sm font-medium transition-colors"
              >
                Explore All Features
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}