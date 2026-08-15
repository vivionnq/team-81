import Image from 'next/image'
import { getInitials, type TeamMember } from '../team.data'

/**
 * A single team member profile card.
 *
 * Uses one consistent layout for every member (NFR-T01, FR-T05) and clearly
 * distinguishes name, role and responsibility (NFR-T02).
 */
export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="flex flex-col items-center rounded-lg border border-zinc-200 bg-white p-6 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      {/* Avatar: approved image (FR-T08) or initials fallback */}
      <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
        {member.imageUrl ? (
          <Image
            src={member.imageUrl}
            alt={`${member.name} profile photo`}
            width={80}
            height={80}
            className="h-full w-full object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className="text-lg font-semibold text-zinc-500 dark:text-zinc-400"
          >
            {getInitials(member.name)}
          </span>
        )}
      </div>

      <h2 className="mt-4 text-base font-semibold text-zinc-900 dark:text-white">{member.name}</h2>
      <p className="mt-0.5 text-sm font-medium text-zinc-500 dark:text-zinc-400">{member.role}</p>
      <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
        {member.responsibility}
      </p>

      {/* Optional approved professional links (FR-T09) */}
      {member.links && member.links.length > 0 && (
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {member.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-zinc-900 hover:underline dark:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  )
}