import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(request: NextRequest) {
    try {
        // Try to get the apple-touch-icon.png file from the public directory
        let filePath = path.join(process.cwd(), 'public', 'apple-touch-icon.png')

        // If apple-touch-icon.png doesn't exist, try to use Personal_Photo.jpeg as fallback
        if (!fs.existsSync(filePath)) {
            const fallbackPath = path.join(process.cwd(), 'public', 'Personal_Photo.jpeg')
            if (fs.existsSync(fallbackPath)) {
                filePath = fallbackPath
            } else {
                // If no suitable image found, return 404
                return NextResponse.json({ error: 'Apple touch icon not found' }, { status: 404 })
            }
        }

        // Read the file
        const fileBuffer = fs.readFileSync(filePath)

        // Determine content type based on file extension
        const contentType = filePath.endsWith('.png') ? 'image/png' : 'image/jpeg'

        // Return the file with proper headers
        return new NextResponse(fileBuffer, {
            headers: {
                'Content-Type': contentType,
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        })
    } catch (error) {
        console.error('Error serving apple-touch-icon:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}