import { NextRequest, NextResponse } from 'next/server';

export function GET(req: NextRequest) {
    return NextResponse.json({ resp: "ok" }, { status: 200 });
}

