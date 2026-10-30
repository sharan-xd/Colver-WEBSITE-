import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export const dynamic = 'force-static'

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'llms.txt')
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    return new NextResponse(content, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
      },
    })
  } catch {
    return new NextResponse('# Colver Systems\nhttps://colver.in', {
      status: 200,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    })
  }
}
