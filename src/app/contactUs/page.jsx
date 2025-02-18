
import ContactUs from '@/components/templates/ContactUs';


const Index = () => {
    return (
        <ContactUs />
    );
};

export default Index;


export const generateMetadata = () => {
    return {
        title: "Contact us | Digilogbook",
        description: "Get in touch with the Digilogbook team for any inquiries, support, or feedback. We're here to help you with all your digital logbook needs.",
    };
};