import "./Services.css";

const services = [
    {
        title: "Web Design",
        description:
            "I create modern, user-focused designs that combine aesthetics with functionality. Every layout is crafted to reflect your brand and engage visitors.",
    },
    {
        title: "Responsive web development",
        description:
            "I build fast, mobile-first websites that adapt seamlessly to every device, ensuring a consistent experience across phones, tablets, and desktops.",
    },
    {
        title: "Website Maintenance",
        description:
            "I provide ongoing updates, performance improvements, and technical support to keep your website secure and running smoothly.",
    },
    {
        title: "Landing Pages",
        description:
            "I develop high-converting landing pages tailored to showcase your services, capture leads, and drive business growth.",
    },


];

const Services = () => {
    return (
        <section className="services" id="services">
            <div className="services-header">
                <h2>My Services</h2>
                <p>
                    Here are the services i offer.
                </p>
            </div>

            <div className="services-grid">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;