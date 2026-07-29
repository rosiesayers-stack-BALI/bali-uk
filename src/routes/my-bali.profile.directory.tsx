import { createFileRoute } from "@tanstack/react-router";
import { Card } from "../components/mybali/DashboardShell";
import { DirectoryEditor } from "@/components/portal/DirectoryEditor";

export const Route = createFileRoute("/my-bali/profile/directory")({
  component: DirectoryEdit,
});

function DirectoryEdit() {
  return (
    <Card>
      <h2 className="text-lg font-semibold text-gray-900 mb-1">Edit company listing</h2>
      <p className="text-sm text-gray-500 mb-5">
        Everything here appears on your public company profile in the BALI directory. Changes save instantly.
      </p>
      <DirectoryEditor />
    </Card>
  );
}
