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
    const { email } = body
    if (!email) return NextResponse.json({ error: 'Missing email' }, { status: 400 })
    console.log('Newsletter sign-up:', email)
    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
