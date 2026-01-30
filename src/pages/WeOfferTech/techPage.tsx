import React, { useMemo, useState } from "react";
import { Avatar } from "antd";
import Chart from "react-apexcharts";
import { YEARS, YEARLY_LANG_DATA, LANGS, getLangSeries } from "./data";

const TechPage: React.FC = () => {
  // YEARS is descending (latest -> oldest). Default to latest year.
  const [selectedYear, setSelectedYear] = useState<number>(YEARS[0]);

  const yearIndex = YEARS.findIndex((y) => y === selectedYear);

  const selectedYearData = YEARLY_LANG_DATA.find((y) => y.year === selectedYear) || YEARLY_LANG_DATA[0];

  // Use the focused LANGS list for the trend chart (display all tracked languages)
  const langNames = useMemo(() => LANGS.map((l) => l.name), []);
  const { categories, series } = useMemo(() => getLangSeries(langNames), [langNames]);

  const chartOptions = {
    chart: {
      id: "tech-trends",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    stroke: { curve: "smooth" },
    xaxis: { categories },
    legend: { position: "top" },
    dataLabels: { enabled: false },
  } as any;

  const goPrev = () => {
    if (yearIndex < YEARS.length - 1) setSelectedYear(YEARS[yearIndex + 1]);
  };

  const goNext = () => {
    if (yearIndex > 0) setSelectedYear(YEARS[yearIndex - 1]);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="mb-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <h1 className="text-center text-3xl font-bold">What We Offer</h1>

        <div className="flex items-center gap-3">
          <button
            onClick={goPrev}
            className="rounded bg-white px-3 py-1 shadow hover:bg-gray-50 disabled:opacity-50"
            disabled={yearIndex === YEARS.length - 1}
          >
            ←
          </button>

          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
            className="rounded border px-3 py-1"
          >
            {YEARS.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>

          <button onClick={goNext} className="rounded bg-white px-3 py-1 shadow hover:bg-gray-50" disabled={yearIndex === 0}>
            →
          </button>
        </div>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="col-span-2 rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-semibold">20-year Trending Languages</h2>
          <Chart options={chartOptions} series={series as any} type="line" height={320} />
          <p className="mt-3 text-sm text-gray-500">Showing trends for tracked programming languages across the last 20 years.</p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-lg font-semibold">Selected Year: {selectedYear}</h2>
          <p className="mb-4 text-sm text-gray-600">Top trending languages in {selectedYear}.</p>
          <div className="flex flex-col gap-3">
            {selectedYearData.langs
              .slice()
              .sort((a, b) => b.score - a.score)
              .slice(0, 6)
              .map((l) => (
                <div key={l.name} className="flex items-center gap-3">
                  <Avatar src={l.icon} size={40} />
                  <div>
                    <div className="font-medium">{l.name}</div>
                    <div className="text-sm text-gray-500">{l.score} trend score</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default TechPage;
