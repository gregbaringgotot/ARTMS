import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";

export default function OtpVerification() {
  return (
    <div className="min-h-screen bg-[var(--artms-soft)] px-6 py-12">
      <div className="mx-auto w-full max-w-lg">
        <div className="mb-6">
          <Link to="/login" className="text-sm font-semibold text-slate-700 hover:text-slate-900">
            ← Back to login
          </Link>
        </div>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between gap-3">
              <CardTitle className="text-base">OTP verification</CardTitle>
              <Badge tone="info">Placeholder</Badge>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Optional step for password reset or sensitive actions (UI only).
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <Input label="Email or mobile" name="target" placeholder="name@company.com" />
              <Input label="One-time password" name="otp" placeholder="6-digit code" />
              <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
                <Button variant="outline" onClick={() => alert("Placeholder: OTP resent (UI only).")}>
                  Resend OTP
                </Button>
                <Button variant="primary" onClick={() => alert("Placeholder: OTP verified (UI only).")}>
                  Verify
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

