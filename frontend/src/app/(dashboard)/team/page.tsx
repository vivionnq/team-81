import type { Metadata } from 'next'
import { PageHeader } from '@/components/layout/PageHeader'
import { TeamMemberCard } from '@/features/team/components/TeamMemberCard'
import { teamMembers } from '@/features/team/team.data'

export const metadata: Metadata = {
  title: 'Team',
}

/**
 * Team page (FR-T01).
 *
 * Displays the project team — each member's name (FR-T02), role (FR-T03) and a
 * brief responsibility/contribution (FR-T04) — in a consistent, readable layout
 * (FR-T05, NFR-T01, NFR-T02) that mirrors the approved design: a header panel
 * above a container of dark member cards, three per row with the remainder
 * centred. Reachable from and exitable via the sidebar (FR-T06, FR-T07),
 * follows the app's visual conventions (NFR-T03), and is responsive on common
 * desktop widths (NFR-T04).
 */
export default function TeamPage() {
  return (
    <div className="space-y-4">
      {/* Header panel */}
      <div className="rounded-lg bg-zinc-100 px-6 py-5 dark:bg-zinc-900/40">
        <PageHeader title="Team" description="Meet the team behind this project" />
      </div>

      {/* Cards container */}
      <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900/40">
        <div className="flex flex-wrap justify-center gap-4">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  )
}