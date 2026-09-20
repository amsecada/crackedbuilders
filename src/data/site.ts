export type ProjectStatus =
  | 'BUILDING'
  | 'EXPERIMENT'
  | 'LIVE'
  | 'ARCHIVED'
  | 'RESEARCH'
  | 'PROTOTYPE'
  | 'INVITE ONLY';

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
  availability: string;
  image?: { src: string; alt: string };
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

// PLACEHOLDER: Add project images and real destinations when supplied.
// Images: 1600 × 900 px (16:9), stored in public/images/.
export const featuredProjects: FeaturedProject[] = [
  {
    placeholder: true,
    label: 'Baseline AI',
    description: 'An AI extension that puts guardrails and best practices in place for new AI users.',
    status: 'BUILDING',
    category: 'AI EXTENSION',
    availability: 'ZIP download forthcoming',
  },
  {
    placeholder: true,
    label: 'Streamdust',
    description: 'A delightful media platform for classic TV and movies. Free to browse and play.',
    status: 'INVITE ONLY',
    category: 'MEDIA PLATFORM',
    availability: 'By invite only at the moment',
  },
];

// PLACEHOLDER: Future tools stay non-linkable until supplied.
export const experiments: Experiment[] = [
  {
    placeholder: true,
    label: 'Other awesome tools',
    description: 'More to come.',
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
    placeholder: false,
    label: 'Facebook',
    handle: '@adamsecada',
    url: 'https://www.facebook.com/adamsecada',
  },
  {
    placeholder: true,
    label: 'LinkedIn',
    handle: 'Offline / rebuilding',
  },
];
