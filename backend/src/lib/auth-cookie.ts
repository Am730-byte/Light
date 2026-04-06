const DEFAULT_COOKIE_DAYS = 15;

export function getAuthCookieOptions() {
  const isProduction = process.env.NODE_ENV === "production";
  const days = Number(process.env.DAYS_RAW) || DEFAULT_COOKIE_DAYS;

  return {
    httpOnly: true,
    maxAge: days * 24 * 60 * 60 * 1000,
    sameSite: isProduction ? ("none" as const) : ("lax" as const),
    path: "/",
    secure: isProduction,
  };
}
