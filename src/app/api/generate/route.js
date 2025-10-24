import { NextResponse } from 'next/server';

export async function POST(request) {
  const { prompt } = await request.json();

  if (!prompt) {
    return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
  }

  try {
    const encodedPrompt = encodeURIComponent(prompt);
    const apiUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?model=flux&width=1024&height=1024`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Pollinations API failed: ${response.status} ${response.statusText}`);
    }

    const imageBuffer = await response.arrayBuffer();
    const base64Image = Buffer.from(imageBuffer).toString('base64');

    return NextResponse.json({
      imageUrl: `data:image/png;base64,${base64Image}`,
    });

  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e.message || 'Internal server error' }, { status: 500 });
  }
}
