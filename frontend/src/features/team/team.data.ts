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
    id: 'josip',
    name: 'Josip',
    role: 'Developer (DEV 2)',
    responsibility:
      'Front-end development and Bootstrap restyling — built the Team page and the post-login redirect flow.',
    links: [{ label: 'GitHub', href: 'https://github.com/vivionnq/team-81' }],
  },
  {
    id: 'member-2',
    name: 'Team Member',
    role: 'Role',
    responsibility: 'Brief responsibility or project contribution.',
  },
  {
    id: 'member-3',
    name: 'Team Member',
    role: 'Role',
    responsibility: 'Brief responsibility or project contribution.',
  },
  {
    id: 'member-4',
    name: 'Team Member',
    role: 'Role',
    responsibility: 'Brief responsibility or project contribution.',
  },
  {
    id: 'member-5',
    name: 'Team Member',
    role: 'Role',
    responsibility: 'Brief responsibility or project contribution.',
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