import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen bg-[var(--artms-soft)] px-6 py-12">
      <div className="mx-auto w-full max-w-lg">
        <div className="mb-6">
          <Link to="/" className="text-sm font-semibold text-slate-700 hover:text-slate-900">
            ← Back to public site
          </Link>
        </div>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between gap-3">
              <CardTitle className="text-base">Forgot password</CardTitle>
              <Badge tone="info">UI only</Badge>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Request a reset link or proceed to OTP verification (placeholder).
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <Input label="Work email" name="email" type="email" placeholder="name@company.com" />
              <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
                <Button as={Link} to="/login" variant="outline">
                  Back to login
                </Button>
                <Button
                  variant="primary"
                  onClick={() => alert("Placeholder: reset request submitted (UI only).")}
                >
                  Send reset link
                </Button>
              </div>
              <div className="rounded-xl border border-[var(--artms-border)] bg-[var(--artms-soft)] p-4">
                <p className="text-sm font-extrabold text-slate-900">
                  Optional OTP verification
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Some organizations require OTP verification as an extra step.
                </p>
                <div className="mt-3">
                  <Button as={Link} to="/otp" variant="accent" className="w-full">
                    Go to OTP screen
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

