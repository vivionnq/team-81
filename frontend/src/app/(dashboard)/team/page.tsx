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
 * brief responsibility/contribution (FR-T04) — in a consistent, readable grid
 * (FR-T06, FR-T07) and it follows the app's existing visual conventions
 * (NFR-T03). The grid is responsive for common desktop widths (NFR-T04).
 */
export default function TeamPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Team" description="Meet the team behind this project" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  )
}