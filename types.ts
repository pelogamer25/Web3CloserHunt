export interface FormData {
  firstName: string;
  lastName: string;
  country: string;
  phoneNumber: string;
  instagramUrl: string;
  experienceYears: string;
  experienceTypes: string[];
  avgDealSize: string;
  workedCommissionOnly: string | null; // 'yes' | 'no'
  whyConsider: string;
}

export const COUNTRIES = [
  "United States", "United Kingdom", "Canada", "Australia", "Germany", 
  "France", "United Arab Emirates", "Singapore", "Netherlands", "Sweden", 
  "Switzerland", "Spain", "Italy", "Ireland", "Other"
];

export const EXP_YEARS_OPTIONS = ["1-2 years", "2-4 years", "4+ years"];

export const EXP_TYPES_OPTIONS = [
  "High-ticket closing",
  "Commission-only roles",
  "DM closing",
  "Call closing"
];

export const DEAL_SIZE_OPTIONS = [
  "Under $1,000",
  "$1,000 – $3,000",
  "$3,000 – $5,000",
  "$5,000+"
];
