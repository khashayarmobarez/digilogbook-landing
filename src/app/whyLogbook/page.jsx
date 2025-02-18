import WhyLogbook from "@/components/templates/WhyLogBook";


const Index = () => {
    return (
        <WhyLogbook />
    );
};

export default Index;

export const generateMetadata = () => {
    return {
        title: "Why use Digilogbook | Digilogbook",
        description: "Discover why Digilogbook makes usage easier and more efficient.",
    };
};
