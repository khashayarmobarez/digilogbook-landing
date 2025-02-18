
import AboutUs from "@/components/templates/AboutUs";

const Index = () => {
    return (
        <AboutUs />
    );
};

export default Index;

export const generateMetadata = () => {
    return {
        title: "About us | Digilogbook",
        description: "about digilogbook.",
    };
};
