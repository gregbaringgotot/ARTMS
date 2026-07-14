import { FiClock, FiClipboard, FiTrendingUp } from "react-icons/fi";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card";
import StatusChip from "../../components/ui/StatusChip";
import { Table, TD, TH, THead } from "../../components/ui/Table";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";
import { mockManpowerRequests, mockNotifications } from "../../utils/mockData";

export default function DepartmentHeadDashboard() {
  const pending = mockManpowerRequests.filter((r) => r.status === "Pending").length;
  const approved = mockManpowerRequests.filter((r) => r.status === "Approved").length;
  const rejected = mockManpowerRequests.filter((r) => r.status === "Rejected").length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--artms-accent)]">
            Overview
          </p>
          <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Department Head Dashboard
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Submit manpower requests and monitor approvals (UI only).
          </p>
        </div>
        <Button as={Link} to="/department-head/manpower-request" variant="accent">
          <FiClipboard aria-hidden="true" />
          New request
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard title="Pending requests" value={pending} icon={<FiClock />} />
        <StatCard title="Approved" value={approved} icon={<FiTrendingUp />} />
        <StatCard title="Rejected" value={rejected} icon={<FiTrendingUp />} />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent requests</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <THead>
                <tr>
                  <TH>ID</TH>
                  <TH>Position</TH>
                  <TH>Vacancies</TH>
                  <TH>Status</TH>
                  <TH className="text-right">Target</TH>
                </tr>
              </THead>
              <tbody>
                {mockManpowerRequests.slice(0, 5).map((r) => (
                  <tr key={r.id} className="hover:bg-slate-50">
                    <TD className="font-semibold text-slate-900">{r.id}</TD>
                    <TD>{r.positionTitle}</TD>
                    <TD>{r.vacancies}</TD>
                    <TD>
                      <StatusChip status={r.status} />
                    </TD>
                    <TD className="text-right">{r.targetHiringDate}</TD>
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
              {mockNotifications.slice(0, 4).map((n) => (
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
    </div>
  );
}

function StatCard({ title, value, icon }) {
  return (
    <Card className="transition hover:shadow-md">
      <CardContent className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
            {title}
          </p>
          <p className="mt-1 text-3xl font-extrabold text-slate-900">{value}</p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl text-[var(--artms-primary)]">
          {icon}
        </div>
      </CardContent>
    </Card>
  );
}

