import Education from "./components/education";
import Header from "./components/header";
import Picture from "./components/picture";
import WorkExperience from "./components/work_experience";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Picture />
      <WorkExperience />
      <Education />
    </div>
    
  );
}