import Landing from "@/components/templates/Landing";

export default async function Index() {

  return (
    <Landing />
  );
  
}


export const generateMetadata = () => {
  return {
    title: "digilogbook | Flight Logging System",
    description: "Learn more about the vision and mission of digilogbook.",
  };
};
