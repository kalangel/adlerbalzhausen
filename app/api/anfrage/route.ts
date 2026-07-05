import { NextResponse } from "next/server";

// Nimmt Formular-Anfragen entgegen (Kontakt, Saal, Bistro, Kegelbahn).
// Zum tatsächlichen E-Mail-Versand einen Anbieter anbinden (z. B. Resend,
// Nodemailer/SMTP) und die Zugangsdaten als Umgebungsvariablen hinterlegen.
export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage" }, { status: 400 });
  }

  // Honeypot: echte Nutzer füllen dieses Feld nicht aus
  if (typeof data.website === "string" && data.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  if (!data.name || !data.email) {
    return NextResponse.json({ error: "Pflichtfelder fehlen" }, { status: 400 });
  }

  console.log("Neue Anfrage:", JSON.stringify(data, null, 2));

  return NextResponse.json({ ok: true });
}
