import { TranslatedText } from "@/component/LanguageProvider";

import { Suspense } from "react";
import ProjectClient from "./ProjectClient";

export default function ProjectPage() {
  return (
    <Suspense fallback={<div><TranslatedText messageKey="content.project.loading" /></div>}>
      <ProjectClient />
    </Suspense>
  );
}
