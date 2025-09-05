type Project = {
  name: string;
  description: string;
  link: string;
  video: string;
  id: string;
  techStack?: string[];
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'SpoonShare | Google Recognized Project',
    description: "Connecting users to share free food, donate, and access local ngo, supporting the UN's Zero Hunger goal.",
    link: 'https://github.com/itsrehan/SpoonShare',
    video: 'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
    techStack: ['Flutter', 'Firebase', 'Figma', 'Google Maps API', 'Google Cloud'],
  },
  {
    name: 'AI Travel Planner',
    description: 'Dynamic AI model delivering optimized, personalized, and context-aware itineraries.',
    link: 'https://motion-primitives.com/',
    video: 'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
    techStack: ['React', 'TypeScript', 'Motion-Primitives', 'Framer Motion'],
  },
  {
    name: 'Real-Estate AI Model',
    description: 'A Comprehensive Real Estate Knowledge System',
    link: 'https://motion-primitives.com/',
    video: 'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
    techStack: ['React', 'TypeScript', 'Motion-Primitives', 'Framer Motion'],
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Aura Digital',
    title: 'CEO & Design Lead',
    start: '2021',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work1',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/itsrehan',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/0xrehann',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/mdrehan15/',
  },
]

export const EMAIL = 'mdrehan1507@gmail.com'
