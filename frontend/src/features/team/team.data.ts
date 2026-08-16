/**
 * Team member content for the Team page.
 *
 * This is the single source of truth for the project team. Rendering reads
 * only from this array, which keeps the page consistent (NFR-T01) and ensures
 * only approved content is shown in the application (NFR-T05, FR-T09).
 *
 * TODO(team): replace the placeholder entries below with project-approved
 * names, roles and responsibilities. Add `imageUrl` only for approved images
 * (FR-T08) and `links` only for approved professional links (FR-T09).
 */

export interface TeamMemberLink {
  /** Short label shown to the user, e.g. "GitHub" or "LinkedIn". */
  label: string
  /** Absolute URL. Only include links approved for publication (FR-T09). */
  href: string
}

export interface TeamMember {
  /** Stable, unique key used for rendering. */
  id: string
  /** Full name of the team member (FR-T02). */
  name: string
  /** Role within the project (FR-T03). */
  role: string
  /** Brief description of responsibilities or contribution (FR-T04). */
  responsibility: string
  /** Optional approved profile image URL (FR-T08). */
  imageUrl?: string
  /** Optional approved professional links (FR-T09). */
  links?: TeamMemberLink[]
}

export const teamMembers: TeamMember[] = [
  {
    id: 's4090043',
    name: 'Vivian Tran',
    role: 'Project Manager',
    responsibility:
      'Coordinates the team, plans and tracks sprints, maintains the product backlog, and keeps delivery on schedule.',
  },
  {
    id: 's3818058',
    name: 'Minwoo Tak',
    role: 'Developer',
    responsibility: 'Builds and tests application features, implements the UI, and writes and reviews code across the stack.',
  },
  {
    id: 's4094394',
    name: 'Josip Kasic',
    role: 'Developer',
    responsibility: 'Builds and tests application features, implements the UI, and writes and reviews code across the stack.',
  },
  {
    id: 's4066094',
    name: 'Sakshi Patel',
    role: 'UX Designer',
    responsibility: 'Designs the interface and user flows, produces wireframes and visual layouts, and ensures a consistent, usable experience.',
  },
  {
    id: 's4053411',
    name: 'Guan Hanyang',
    role: 'Business Analyst',
    responsibility: "Gathers and documents requirements, defines acceptance criteria, and aligns stakeholder needs with the team's work.",
  },
]

/** Initials fallback used when a member has no approved profile image. */
export function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return '?'
  const first = parts[0] ?? ''
  if (parts.length === 1) return first.slice(0, 2).toUpperCase()
  const last = parts[parts.length - 1] ?? ''
  return (first.charAt(0) + last.charAt(0)).toUpperCase()
}