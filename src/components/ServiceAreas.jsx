export default function ServiceAreas() {
    const areas = [
        'Laggere',
        'Malleshwaram',
        'Rajajinagar',
        'Basaveshwaranagar',
        'Vijayanagar',
        'Yeshwanthpur',
        'Mahalakshmi Layout'
    ];

    return (
        <section id="areas" className="py-20 bg-white text-center">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-primary mb-12">Service Areas</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {areas.map((area) => (
                        <span
                            key={area}
                            className="px-6 py-3 bg-gray-50 text-primary rounded-full font-medium border border-gray-100 shadow-sm hover:shadow-md hover:bg-white hover:text-accent transition-all duration-300"
                        >
                            {area}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
