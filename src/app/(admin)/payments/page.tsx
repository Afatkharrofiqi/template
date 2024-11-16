import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

function getRandomId(): string {
  return Math.random().toString(36).substring(2, 10);
}

function getRandomAmount(): number {
  return Math.floor(Math.random() * 1000) + 1; // Random amount between 1 and 1000
}

function getRandomStatus(): "pending" | "processing" | "success" | "failed" {
  const statuses: ("pending" | "processing" | "success" | "failed")[] = [
    "pending",
    "processing",
    "success",
    "failed",
  ];
  return statuses[Math.floor(Math.random() * statuses.length)];
}

function getRandomEmail(): string {
  const domains = ["example.com", "test.com", "domain.com"];
  return `${Math.random().toString(36).substring(2, 6)}@${domains[Math.floor(Math.random() * domains.length)]}`;
}

async function getData(): Promise<Payment[]> {
  const count = 50;
  const data: Payment[] = Array.from({ length: count }, () => ({
    id: getRandomId(),
    amount: getRandomAmount(),
    status: getRandomStatus(),
    email: getRandomEmail(),
  }));

  return data;
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
