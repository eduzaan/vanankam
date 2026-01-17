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
    const { name, email, resume } = body
    if (!name || !email) return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    console.log('Career application:', { name, email, resume })
    return NextResponse.json({ success: true, message: 'Application received' })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
