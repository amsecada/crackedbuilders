export type ProjectStatus =
  | 'BUILDING'
  | 'EXPERIMENT'
  | 'LIVE'
  | 'ARCHIVED'
  | 'RESEARCH'
  | 'PROTOTYPE';

interface LinkableEntry {
  label: string;
  description: string;
}

export interface PublishedEntry extends LinkableEntry {
  placeholder: false;
  url: string;
}

export interface PlaceholderEntry extends LinkableEntry {
  placeholder: true;
  url?: never;
}

export interface FeaturedProjectBase extends LinkableEntry {
  status: ProjectStatus;
  category: string;
}

export type FeaturedProject =
  | (FeaturedProjectBase & PublishedEntry)
  | (FeaturedProjectBase & PlaceholderEntry);

export type Experiment = PublishedEntry | PlaceholderEntry;
export type WritingEntry = PublishedEntry | PlaceholderEntry;

export interface ContactLink {
  placeholder: false;
  label: string;
  handle: string;
  url: string;
}

export interface ContactPlaceholder {
  placeholder: true;
  label: string;
  handle: string;
  url?: never;
}

// PLACEHOLDER: Replace these entries with Adam's real work before publishing.
export const featuredProjects: FeaturedProject[] = [
  {
    placeholder: true,
    label: 'Selected work is being assembled.',
    description:
      'Projects, experiments, and the useful details behind them will live here.',
    status: 'BUILDING',
    category: 'PROJECT ARCHIVE',
  },
];

// PLACEHOLDER: Keep entries non-linkable until real project details are supplied.
export const experiments: Experiment[] = [
  {
    placeholder: true,
    label: 'Experiments in AI',
    description: 'Notes and working artifacts forthcoming.',
  },
  {
    placeholder: true,
    label: 'Systems and small business',
    description: 'Fieldwork forthcoming.',
  },
];

// PLACEHOLDER: Replace with real published writing and URLs.
export const writingEntries: WritingEntry[] = [
  {
    placeholder: true,
    label: 'Writing archive in progress',
    description: 'Ideas about AI, systems, business, and things worth testing.',
  },
];

export const contactLinks: Array<ContactLink | ContactPlaceholder> = [
  {
    placeholder: false,
    label: 'X / Twitter',
    handle: '@AdamSecada',
    url: 'https://x.com/AdamSecada',
  },
  {
    placeholder: false,
    label: 'TikTok',
    handle: '@doublecli.cc',
    url: 'https://www.tiktok.com/@doublecli.cc',
  },
  {
    placeholder: false,
    label: 'Instagram',
    handle: '@adam.secada',
    url: 'https://www.instagram.com/adam.secada/',
  },
  {
    placeholder: true,
    label: 'LinkedIn',
    handle: 'Offline / rebuilding',
  },
];
