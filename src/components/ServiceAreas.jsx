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
                <h2 className="text-4xl font-bold text-primary mb-4">Our Service Areas</h2>
                <p className="text-gray-600 mb-10 text-lg">
                </p>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
                    {areas.map((area) => (
                        <span
                            key={area}
                            className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-50 text-primary rounded-full text-sm sm:text-base font-medium border border-gray-100 shadow-sm hover:shadow-md hover:bg-white hover:text-accent transition-all duration-300"
                        >
                            {area}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
