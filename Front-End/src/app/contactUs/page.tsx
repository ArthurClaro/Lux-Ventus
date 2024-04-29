import ContactUsSec from "@/components/ContactUsSec";
import 'transition-style';
import React from 'react';

const ContactUs: React.FC = () => {
    return (
        <div transition-style="in:wipe:right" style={{ paddingTop: "1px" }}>
            <ContactUsSec />
        </div>
    );
}

export default ContactUs;