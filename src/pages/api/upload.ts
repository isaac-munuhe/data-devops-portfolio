import type { APIRoute } from 'astro';
import { put } from '@vercel/blob';

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse the incoming multipart form data
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return new Response(JSON.stringify({ error: 'No file provided in the request payload.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Push the file to Vercel Blob storage
    // 'public' access means anyone with the URL can view/download it
    const blob = await put(file.name, file, {
      access: 'public',
      // This ensures if you upload a new version with the same name, it overwrites the old one
      addRandomSuffix: false, 
    });

    return new Response(JSON.stringify({
      message: 'Upload successful',
      url: blob.url,
      size: blob.size
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Blob upload error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error during blob upload.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};