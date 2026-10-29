import React from 'react'
import Link from 'next/link'
import { FileQuestion, ArrowRight, Home, BookOpen } from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-lg w-full p-8 sm:p-12 rounded-3xl glass-panel border border-border text-center space-y-6 shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mx-auto shadow-sm">
          <FileQuestion className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <Badge variant="outline" className="font-mono">
            HTTP 404
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Page Not Located
          </h1>
          <p className="text-sm text-muted leading-relaxed">
            The route or resource you requested could not be resolved. It may have moved or been updated in our latest release.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link href="/" className="w-full sm:w-auto">
            <Button variant="primary" size="md" className="w-full sm:w-auto" iconRight={<Home className="w-4 h-4" />}>
              Return to Overview
            </Button>
          </Link>
          <Link href="/docs" className="w-full sm:w-auto">
            <Button variant="secondary" size="md" className="w-full sm:w-auto glass-panel" iconRight={<BookOpen className="w-4 h-4" />}>
              Browse Docs
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
