import companiesData from "@/data/CompaniesData";

export default function Vitae() {
    return (
        <div className="flex flex-col w-full mt-1 mb-1 pl-3 pr-3">
            <h1 className="text-2xl font-bold mb-4 text-left">Vitae</h1>
            <br />
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                {Object.keys(companiesData).map((company, index) => (
                    <li key={company}>
                        <div className="timeline-middle">
                            <div className="avatar">
                            <div className="w-20 rounded-full bg-cover bg-center bg-no-repeat bg-white" style={{ backgroundImage: `url(${companiesData[company].image})`, backgroundSize: '90%' }} />
                            </div>
                        </div>
                        <div
                            className={`${
                                index % 2 === 0
                                    ? "timeline-start md:text-end"
                                    : "timeline-end"
                            } pl-4 pr-4 pb-10`}
                        >
                            <time className="font-mono italic">
                                {companiesData[company].time}
                            </time>
                            <div className="text-lg font-black">
                                {companiesData[company].title} -{" "}
                                <a
                                    className="link link-hover text-custom-blue"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={companiesData[company].website}
                                >
                                    {company}
                                </a>
                            </div>
                            <div
                                className="mt-2"
                                dangerouslySetInnerHTML={{
                                    __html: companiesData[company].description,
                                }}
                            />
                        </div>
                        {index !== Object.keys(companiesData).length - 1 && (
                            <hr />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
