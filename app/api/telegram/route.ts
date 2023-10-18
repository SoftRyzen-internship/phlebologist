import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const TG_BOT_TOKEN = process.env.NEXT_PUBLIC_TG_BOT_TOKEN;
  const TG_CHAT_ID = process.env.NEXT_PUBLIC_TG_CHAT_ID;
  const URI_API = `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`;

  const message = await req.json();
  try {
    const response = await axios.post(URI_API, {
      chat_id: TG_CHAT_ID,
      text: message.text,
      parse_mode: 'HTML',
    });

    if (response.data.result) {
      return NextResponse.json({ status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
}
