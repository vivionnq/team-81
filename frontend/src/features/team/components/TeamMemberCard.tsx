import Image from 'next/image'
import { getInitials, type TeamMember } from '../team.data'

/**
 * A single team member profile card.
 *
 * Matches the Team page design: a dark card with a circular avatar and the
 * name and role shown in light "field" boxes, followed by a brief
 * responsibility line. One consistent layout for every member (NFR-T01,
 * FR-T05); name, role and responsibility are clearly distinguished (NFR-T02).
 */
export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="flex w-full flex-col items-center rounded-lg bg-zinc-700 p-6 text-center shadow-sm ring-1 ring-black/10 sm:w-[280px] dark:bg-zinc-800 dark:ring-white/10">
      {/* Avatar: approved image (FR-T08) or initials fallback */}
      <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-zinc-200">
        {member.imageUrl ? (
          <Image
            src={member.imageUrl}
            alt={`${member.name} profile photo`}
            width={80}
            height={80}
            className="h-full w-full object-cover"
          />
        ) : (
          <span aria-hidden="true" className="text-lg font-semibold text-zinc-600">
            {getInitials(member.name)}
          </span>
        )}
      </div>

      {/* Name field (FR-T02) */}
      <h2 className="mt-5 w-full rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-semibold text-zinc-900">
        {member.name}
      </h2>

      {/* Role field (FR-T03) */}
      <p className="mt-2 w-full rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700">
        {member.role}
      </p>

      {/* Brief responsibility / contribution (FR-T04) */}
      <p className="mt-3 text-xs leading-relaxed text-zinc-300">{member.responsibility}</p>

      {/* Optional approved professional links (FR-T09) */}
      {member.links && member.links.length > 0 && (
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {member.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-zinc-100 underline-offset-2 hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  )
}