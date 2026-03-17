const resetPasswordEmail = (resetUrl) => `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8" /><title>Reset Your Password</title></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:40px 0;">
        <table width="560" cellpadding="0" cellspacing="0"
          style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
          <tr>
            <td style="background:#0f172a;padding:32px 40px;">
              <h1 style="margin:0;color:#fff;font-size:22px;">MyApp</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:40px;">
              <h2 style="margin:0 0 12px;color:#0f172a;font-size:20px;">Reset your password</h2>
              <p style="margin:0 0 24px;color:#64748b;font-size:15px;line-height:1.6;">
                We received a request to reset your password. This link expires in <strong>30 minutes</strong>.
              </p>
              <a href="${resetUrl}"
                style="display:inline-block;background:#0f172a;color:#fff;text-decoration:none;padding:14px 32px;border-radius:8px;font-size:15px;font-weight:600;">
                Reset Password
              </a>
              <p style="margin:28px 0 0;color:#94a3b8;font-size:13px;line-height:1.6;">
                If you didn't request this, you can safely ignore this email.<br/><br/>
                Or copy this link:<br/>
                <a href="${resetUrl}" style="color:#6366f1;word-break:break-all;">${resetUrl}</a>
              </p>
            </td>
          </tr>
          <tr>
            <td style="background:#f8fafc;padding:20px 40px;border-top:1px solid #e2e8f0;">
              <p style="margin:0;color:#94a3b8;font-size:12px;">© ${new Date().getFullYear()} MyApp. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

module.exports = { resetPasswordEmail };