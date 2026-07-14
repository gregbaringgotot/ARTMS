import { FiActivity, FiCalendar, FiClipboard, FiUsers } from "react-icons/fi";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import StatusChip from "../../components/ui/StatusChip";
import { Table, TD, TH, THead } from "../../components/ui/Table";
import { mockApplicants, mockManpowerRequests, mockNotifications } from "../../utils/mockData";

export default function AdminDashboard() {
  const pendingMR = mockManpowerRequests.filter((r) => r.status === "Pending").length;
  const totalApplicants = mockApplicants.length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--artms-accent)]">
            Dashboard
          </p>
          <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            HR Admin Overview
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Recruitment statistics, requests, applicants, schedules, and alerts (UI only).
          </p>
        </div>
        <Badge tone="info">Placeholder analytics</Badge>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat title="Applicants" value={totalApplicants} icon={<FiUsers />} />
        <Stat title="Pending requests" value={pendingMR} icon={<FiClipboard />} />
        <Stat title="Interviews today" value={3} icon={<FiCalendar />} />
        <Stat title="Time-to-hire (avg)" value={"18d"} icon={<FiActivity />} />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent applicants</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <THead>
                <tr>
                  <TH>Applicant</TH>
                  <TH>Role</TH>
                  <TH>Status</TH>
                  <TH className="text-right">Applied</TH>
                </tr>
              </THead>
              <tbody>
                {mockApplicants.map((a) => (
                  <tr key={a.id} className="hover:bg-slate-50">
                    <TD className="font-semibold text-slate-900">
                      {a.name}
                      <div className="text-xs font-medium text-slate-500">{a.id}</div>
                    </TD>
                    <TD>{a.role}</TD>
                    <TD>
                      <StatusChip status={a.status} />
                    </TD>
                    <TD className="text-right">{a.appliedAt}</TD>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {mockNotifications.slice(0, 5).map((n) => (
                <li key={n.id} className="rounded-xl border border-[var(--artms-border)] bg-white p-3">
                  <p className="text-sm font-extrabold text-slate-900">{n.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{n.message}</p>
                  <p className="mt-2 text-xs text-slate-400">{n.time}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Manpower request summary</CardTitle>
          </CardHeader>
          <CardContent>
            <SimpleBarChart
              title="Requests by status"
              items={[
                { label: "Pending", value: pendingMR, color: "bg-amber-400" },
                {
                  label: "Approved",
                  value: mockManpowerRequests.filter((r) => r.status === "Approved").length,
                  color: "bg-emerald-500",
                },
                {
                  label: "Rejected",
                  value: mockManpowerRequests.filter((r) => r.status === "Rejected").length,
                  color: "bg-red-500",
                },
              ]}
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recruitment pipeline (sample)</CardTitle>
          </CardHeader>
          <CardContent>
            <SimpleBarChart
              title="Candidates by stage"
              items={[
                { label: "New", value: 10, color: "bg-blue-500" },
                { label: "Screening", value: 7, color: "bg-amber-400" },
                { label: "Interview", value: 4, color: "bg-orange-500" },
                { label: "Offer", value: 2, color: "bg-emerald-500" },
              ]}
            />
          </CardContent>
        </Card>
      </div>
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

function SimpleBarChart({ title, items }) {
  const max = Math.max(...items.map((i) => i.value), 1);
  return (
    <div>
      <p className="text-sm font-extrabold text-slate-900">{title}</p>
      <div className="mt-4 space-y-3">
        {items.map((i) => (
          <div key={i.label} className="grid grid-cols-12 items-center gap-3">
            <div className="col-span-3 text-xs font-semibold text-slate-600">{i.label}</div>
            <div className="col-span-8">
              <div className="h-2.5 w-full rounded-full bg-slate-100">
                <div
                  className={`h-2.5 rounded-full ${i.color}`}
                  style={{ width: `${Math.round((i.value / max) * 100)}%` }}
                />
              </div>
            </div>
            <div className="col-span-1 text-right text-xs font-bold text-slate-700">{i.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

