import { NextRequest, NextResponse } from 'next/server'

async function parseBody(request: NextRequest) {
  try {
    return await request.json()
  } catch (e) {
    const fd = await request.formData()
    const obj: Record<string, any> = {}
    fd.forEach((v, k) => (obj[k] = v))
    return obj
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await parseBody(request)
    const { name, email, phone, city, state, investment, experience, message } = body

    if (!name || !email || !phone || !city || !state || !investment) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    console.log('Franchise Application:', { name, email, phone, city, state, investment, experience, message })

    await new Promise((r) => setTimeout(r, 500))

    return NextResponse.json({ success: true, message: 'Application submitted successfully' }, { status: 200 })
  } catch (error) {
    console.error('Franchise form error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
