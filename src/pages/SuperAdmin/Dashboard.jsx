import { FiActivity, FiShield, FiUsers } from "react-icons/fi";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import { Table, TD, TH, THead } from "../../components/ui/Table";

const audit = [
  { id: "AL-9001", actor: "superadmin@company.com", action: "Created user", target: "hradmin1@company.com", time: "1h ago" },
  { id: "AL-9002", actor: "superadmin@company.com", action: "Updated role", target: "Department Head", time: "4h ago" },
  { id: "AL-9003", actor: "superadmin@company.com", action: "Changed setting", target: "OTP required", time: "1d ago" },
];

export default function SuperAdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--artms-accent)]">
            Governance
          </p>
          <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Super Admin Dashboard
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Manage users, departments, roles, and audit logs (UI only).
          </p>
        </div>
        <Badge tone="info">UI only</Badge>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Stat title="Active users" value={24} icon={<FiUsers />} />
        <Stat title="Roles" value={6} icon={<FiShield />} />
        <Stat title="Audit events (7d)" value={58} icon={<FiActivity />} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent audit events</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <THead>
              <tr>
                <TH>ID</TH>
                <TH>Actor</TH>
                <TH>Action</TH>
                <TH>Target</TH>
                <TH className="text-right">Time</TH>
              </tr>
            </THead>
            <tbody>
              {audit.map((a) => (
                <tr key={a.id} className="hover:bg-slate-50">
                  <TD className="font-semibold text-slate-900">{a.id}</TD>
                  <TD>{a.actor}</TD>
                  <TD>{a.action}</TD>
                  <TD>{a.target}</TD>
                  <TD className="text-right">{a.time}</TD>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

function Stat({ title, value, icon }) {
  return (
    <Card className="transition hover:shadow-md">
      <CardContent className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{title}</p>
          <p className="mt-1 text-3xl font-extrabold text-slate-900">{value}</p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl text-[var(--artms-primary)]">
          {icon}
        </div>
      </CardContent>
    </Card>
  );
}

