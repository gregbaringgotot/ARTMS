import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import SearchBar from "../../components/ui/SearchBar";
import Badge from "../../components/ui/Badge";
import { Table, TD, TH, THead } from "../../components/ui/Table";
import ConfirmDialog from "../../components/ui/ConfirmDialog";

const users = [
  { id: "U-1", name: "HR Admin 1", email: "hradmin1@company.com", role: "HR Admin", status: "Active" },
  { id: "U-2", name: "Dept Head - Ops", email: "opshead@company.com", role: "Department Head", status: "Active" },
  { id: "U-3", name: "HR Admin 2", email: "hradmin2@company.com", role: "HR Admin", status: "Inactive" },
];

export default function Users() {
  const [q, setQ] = useState("");
  const [confirm, setConfirm] = useState(false);
  const rows = users.filter((u) => {
    const query = q.trim().toLowerCase();
    if (!query) return true;
    return (
      u.name.toLowerCase().includes(query) ||
      u.email.toLowerCase().includes(query) ||
      u.role.toLowerCase().includes(query)
    );
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--artms-accent)]">
            Administration
          </p>
          <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            User Management
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Create and manage HR Admin and Department Head accounts (UI only).
          </p>
        </div>
        <Button variant="accent" onClick={() => alert("Placeholder: create user (UI only).")}>
          Create user
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <CardTitle>Users</CardTitle>
            <div className="w-full sm:max-w-sm">
              <SearchBar value={q} onChange={setQ} placeholder="Search users…" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <THead>
              <tr>
                <TH>Name</TH>
                <TH>Email</TH>
                <TH>Role</TH>
                <TH>Status</TH>
                <TH className="text-right">Actions</TH>
              </tr>
            </THead>
            <tbody>
              {rows.map((u) => (
                <tr key={u.id} className="hover:bg-slate-50">
                  <TD className="font-semibold text-slate-900">{u.name}</TD>
                  <TD>{u.email}</TD>
                  <TD>
                    <Badge tone="info">{u.role}</Badge>
                  </TD>
                  <TD>
                    <Badge tone={u.status === "Active" ? "success" : "default"}>
                      {u.status}
                    </Badge>
                  </TD>
                  <TD className="text-right">
                    <div className="inline-flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => alert("Placeholder: edit user (UI only).")}>
                        Edit
                      </Button>
                      <Button size="sm" variant="danger" onClick={() => setConfirm(true)}>
                        Disable
                      </Button>
                    </div>
                  </TD>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardContent>
      </Card>

      <ConfirmDialog
        open={confirm}
        title="Disable user?"
        description="This is UI-only. Confirm to simulate disabling an account."
        confirmLabel="Disable"
        tone="danger"
        onConfirm={() => alert("Placeholder: user disabled (UI only).")}
        onClose={() => setConfirm(false)}
      />
    </div>
  );
}

