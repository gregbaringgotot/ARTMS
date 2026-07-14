import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import SearchBar from "../../components/ui/SearchBar";
import { Table, TD, TH, THead } from "../../components/ui/Table";
import Badge from "../../components/ui/Badge";

const departments = [
  { id: "D-OPS", name: "Operations", head: "Ops Head", status: "Active" },
  { id: "D-HR", name: "Human Resources", head: "HR Manager", status: "Active" },
  { id: "D-IT", name: "IT", head: "IT Lead", status: "Active" },
  { id: "D-FIN", name: "Finance", head: "Finance Lead", status: "Active" },
];

export default function Departments() {
  const [q, setQ] = useState("");
  const rows = departments.filter((d) => {
    const query = q.trim().toLowerCase();
    if (!query) return true;
    return d.name.toLowerCase().includes(query) || d.id.toLowerCase().includes(query);
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--artms-accent)]">
            Organization
          </p>
          <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Department Management
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Maintain departments and reporting structure (UI only).
          </p>
        </div>
        <Button variant="accent" onClick={() => alert("Placeholder: add department (UI only).")}>
          Add department
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <CardTitle>Departments</CardTitle>
            <div className="w-full sm:max-w-sm">
              <SearchBar value={q} onChange={setQ} placeholder="Search departments…" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <THead>
              <tr>
                <TH>ID</TH>
                <TH>Name</TH>
                <TH>Head</TH>
                <TH>Status</TH>
                <TH className="text-right">Actions</TH>
              </tr>
            </THead>
            <tbody>
              {rows.map((d) => (
                <tr key={d.id} className="hover:bg-slate-50">
                  <TD className="font-semibold text-slate-900">{d.id}</TD>
                  <TD>{d.name}</TD>
                  <TD>{d.head}</TD>
                  <TD>
                    <Badge tone="success">{d.status}</Badge>
                  </TD>
                  <TD className="text-right">
                    <div className="inline-flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => alert("Placeholder: edit department (UI only).")}>
                        Edit
                      </Button>
                      <Button size="sm" variant="danger" onClick={() => alert("Placeholder: disable department (UI only).")}>
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
    </div>
  );
}

