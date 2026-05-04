type SmtpConfig = {
  host: string;
  port: number;
  user: string;
  pass: string;
  from: string;
};

export function getSmtpConfig(): SmtpConfig {
  return {
    host: process.env.SMTP_HOST ?? "",
    port: Number(process.env.SMTP_PORT ?? "587"),
    user: process.env.SMTP_USER ?? "",
    pass: process.env.SMTP_PASS ?? "",
    from: process.env.SMTP_FROM ?? "",
  };
}

export function isSmtpConfigured(): boolean {
  const cfg = getSmtpConfig();
  return Boolean(cfg.host && cfg.port && cfg.user && cfg.pass && cfg.from);
}
