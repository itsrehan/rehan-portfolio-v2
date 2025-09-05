'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img
          src="/rehan_profile.jpg"
          alt="Rehan Profile"
          className="rounded-full object-cover"
          style={{ width: '48px', height: '48px' }}
        />
        <div>
          <Link href="/" className="font-medium text-black dark:text-white">
            REHAN M.
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            AI Engineer & Product Designer
          </TextEffect>
        </div>
      </div>
    </header>
  )
}
