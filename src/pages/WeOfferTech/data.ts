// 20 years of deterministic static data for tech offerings and yearly counts
export const LATEST_YEAR = new Date().getFullYear();
export const YEARS = Array.from({ length: 20 }, (_, i) => LATEST_YEAR - i);

export type TechItem = {
  title: string;
  description: string;
  icon: string;
  baseCount: number; // count at the latest year used to scale historical values
};

// Base tech definitions using the same list as the page's UI (icons + descriptions)
export const TECHS: TechItem[] = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    title: "Cloud Solutions",
    description: "Leverage the power of cloud computing to scale your business with ease.",
    baseCount: 18,
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2620/2620406.png",
    title: "Data Analytics",
    description: "Transform data into actionable insights for better decision-making.",
    baseCount: 31,
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/4478/4478859.png",
    title: "AI & Machine Learning",
    description: "Implement AI solutions to automate processes and gain a competitive edge.",
    baseCount: 10,
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    title: "Cybersecurity",
    description: "Protect your digital assets with advanced security solutions.",
    baseCount: 22,
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/2721/2721293.png",
    title: "DevOps",
    description: "Streamline your software development lifecycle with DevOps practices.",
    baseCount: 40,
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1216/1216733.png",
    title: "IoT Solutions",
    description: "Connect and manage devices seamlessly with our IoT solutions.",
    baseCount: 14,
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3011/3011270.png",
    title: "Web Development",
    description: "Modern and scalable websites built for performance.",
    baseCount: 27,
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3063/3063825.png",
    title: "Mobile Apps",
    description: "Engaging mobile experiences on iOS and Android.",
    baseCount: 45,
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2799/2799920.png",
    title: "Blockchain",
    description: "Secure and transparent blockchain solutions.",
    baseCount: 7,
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    title: "UI/UX Design",
    description: "User-centered, beautiful and intuitive designs.",
    baseCount: 23,
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/201/201818.png",
    title: "AR/VR Development",
    description: "Immersive augmented and virtual reality solutions.",
    baseCount: 11,
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
    title: "QA & Testing",
    description: "Ensure quality with automated and manual testing.",
    baseCount: 16,
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3541/3541871.png",
    title: "API Integration",
    description: "Connect systems and services seamlessly.",
    baseCount: 20,
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/599/599305.png",
    title: "Digital Marketing",
    description: "Grow your business with cutting-edge digital strategies.",
    baseCount: 34,
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3523/3523887.png",
    title: "Support & Maintenance",
    description: "Reliable support for your digital assets.",
    baseCount: 9,
  },
];

export type YearlyTech = {
  year: number;
  techs: { title: string; description: string; icon: string; count: number }[];
};

// Deterministic generator: older years have smaller counts, latest year uses baseCount
const generateYearlyData = (): YearlyTech[] => {
  const minScale = 0.35; // how small counts can go at the oldest year
  const maxScale = 1.0; // latest year scale
  const totalYears = YEARS.length;

  return YEARS.map((year, yi) => {
    // scale grows linearly with year index (0 -> latest)
    const idxFromOldest = totalYears - 1 - yi; // 0..19 where 0 is oldest
    const scale = minScale + ((idxFromOldest) / (totalYears - 1)) * (maxScale - minScale);

    const techs = TECHS.map((t) => ({
      title: t.title,
      description: t.description,
      icon: t.icon,
      count: Math.max(1, Math.round(t.baseCount * scale)),
    }));

    return { year, techs };
  });
};

export const YEARLY_DATA = generateYearlyData();
export const YEARS_DESC = YEARS; // descending: latest -> oldest

// Helper: produce series for ApexCharts for the provided tech names across all years
export const getSeriesForTechs = (techNames: string[]) => {
  return techNames.map((name) => ({
    name,
    data: YEARLY_DATA.map((y) => {
      const found = y.techs.find((t) => t.title === name);
      return found ? found.count : 0;
    }).reverse(), // reverse to show oldest->latest on x-axis when categories are reversed
  }));
};

export default {
  YEARS: YEARS_DESC,
  TECHS,
  YEARLY_DATA,
  getSeriesForTechs,
};

// --- Language trends (new requirement) ---
export type LangItem = {
  name: string;
  icon?: string;
  latestScore: number; // score at latest year
};

// Focused languages to track
export const LANGS: LangItem[] = [
  { name: "Java", icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png", latestScore: 80 },
  { name: ".NET", icon: "https://cdn-icons-png.flaticon.com/512/919/919833.png", latestScore: 50 },
  { name: "JavaScript", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png", latestScore: 95 },
  { name: "Blockchain", icon: "https://cdn-icons-png.flaticon.com/512/2107/2107952.png", latestScore: 65 },
];

export type YearlyLang = {
  year: number;
  langs: { name: string; icon?: string; score: number }[];
};

// Generate deterministic, plausible trends for each language across YEARS.
const generateLangYearlyData = (): YearlyLang[] => {
  const totalYears = YEARS.length; // 20

  // For deterministic trends, we'll craft per-language trend functions (0..1) then scale by latestScore.
  const trendFns: Record<string, (t: number) => number> = {
    // Java: strong early, slight decline -> stable
    Java: (t) => 0.8 - 0.1 * Math.tanh((t - 12) / 6),
    // .NET: peak mid-years then slight decline
    ".NET": (t) => 0.5 + 0.2 * Math.exp(-Math.abs(t - 9) / 4),
    // JavaScript: steady growth
    JavaScript: (t) => 0.3 + 0.7 * (t / (totalYears - 1)),
    // Blockchain: recent surge
    Blockchain: (t) => 0.05 + 0.95 * Math.pow(t / (totalYears - 1), 3),
  };

  return YEARS.map((year, yi) => {
    const idxFromOldest = totalYears - 1 - yi; // 0..19 where 0 is oldest

    const langs = LANGS.map((l) => {
      const fn = trendFns[l.name] || (() => 0.5);
      // score = latestScore * trendFactor, clamp and round
      const factor = fn(idxFromOldest);
      const score = Math.max(1, Math.round(l.latestScore * factor));
      return { name: l.name, icon: l.icon, score };
    });

    return { year, langs };
  });
};

export const YEARLY_LANG_DATA = generateLangYearlyData();

export const getLangSeries = (langNames: string[]) => {
  const categories = YEARLY_LANG_DATA.map((y) => String(y.year)).reverse();
  const series = langNames.map((name) => ({
    name,
    data: YEARLY_LANG_DATA.map((y) => {
      const found = y.langs.find((l) => l.name === name);
      return found ? found.score : 0;
    }).reverse(),
  }));

  return { categories, series };
};
