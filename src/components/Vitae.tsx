import vitaeData from "@/data/VitaeData";

export default function Vitae() {
    return (
        <div className="flex flex-col w-full mt-1 mb-1 pl-8 pr-8 lg:pl-2 lg:pr-2 md:pl-2 md:pr-2">
            <h1 className="text-2xl font-bold mb-4 text-left titles">Vitae</h1>
            <br />
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                {Object.keys(vitaeData).map((company, index) => (
                    <li key={company}>
                        <div className="timeline-middle">
                            <div className="avatar">
                                <div className="w-20 rounded-full bg-cover bg-center bg-no-repeat bg-white" style={{ backgroundImage: `url(${vitaeData[company].image})`, backgroundSize: '90%' }} />
                            </div>
                        </div>
                        <div
                            className={`${index % 2 === 0
                                    ? "timeline-start md:text-end"
                                    : "timeline-end"
                                } pl-4 pr-4 pb-10`}
                        >
                            <time className="font-mono italic">
                                {vitaeData[company].start_date["month"]} {vitaeData[company].start_date["year"]} - {vitaeData[company].end_date["month"]} {vitaeData[company].end_date["year"]}
                            </time>
                            <div className="text-lg font-black text-custom-blue">
                                {vitaeData[company].title} 
                                <span className=" text-gray-400"> - </span>
                                <a
                                    className="link link-hover text-gray-400"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={vitaeData[company].website}
                                >
                                    {company}
                                </a>
                            </div>
                            <div
                                className="mt-2"
                                dangerouslySetInnerHTML={{
                                    __html: vitaeData[company].description,
                                }}
                            />
                        </div>
                        {index !== Object.keys(vitaeData).length - 1 && (
                            <hr />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
