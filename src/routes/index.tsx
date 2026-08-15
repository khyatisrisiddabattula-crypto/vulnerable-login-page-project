import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VULN LOGIN SCANNER — Educational Login Security Analyzer" },
      {
        name: "description",
        content:
          "Educational login page vulnerability analyzer. Simulate security checks, score configurations and learn secure authentication practices.",
      },
      { property: "og:title", content: "VULN LOGIN SCANNER" },
      {
        property: "og:description",
        content:
          "Educational Login Security Analyzer — simulate login page vulnerability checks locally in your browser.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/vuln/index.html"
      title="Vuln Login Scanner"
      style={{ border: 0, width: "100%", height: "100vh", display: "block" }}
    />
  );
}
