import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    if (process.env.NODE_ENV !== 'production') {
        return NextResponse.json({ ok: true, skipped: true });
    }

    try {
        const ip = request.headers.get('x-forwarded-for') ?? 'Unknown';
        const country = request.headers.get('x-vercel-ip-country') ?? 'Unknown';
        const city = request.headers.get('x-vercel-ip-city') ?? 'Unknown';
        const userAgent = request.headers.get('user-agent') ?? 'Unknown';
        const timestamp = new Date().toLocaleString('en-US', { timeZone: 'Asia/Yangon' });

        const data = await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>',
            to: ['linnlatt.ww11@gmail.com'],
            subject: `Someone visited your portfolio`,
            html: `
                <p><strong>Time:</strong> ${timestamp}</p>
                <p><strong>Country:</strong> ${country}</p>
                <p><strong>City:</strong> ${city}</p>
                <p><strong>IP:</strong> ${ip}</p>
                <p><strong>Device:</strong> ${userAgent}</p>
            `
        });

        if (data.error) {
            console.error('Resend error:', data.error);
            return NextResponse.json({ error: 'Failed to send visit notification' }, { status: 500 });
        }

        return NextResponse.json({ ok: true });

    } catch (error) {
        console.error('Visit notification error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
