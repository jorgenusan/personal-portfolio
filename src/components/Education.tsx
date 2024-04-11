import educationData from "@/data/EducationData";

export default function Vitae() {
    return (
        <div className="flex flex-col w-full mt-1 mb-1 pl-8 pr-8 lg:pl-2 lg:pr-2 md:pl-2 md:pr-2">
            <h1 className="text-2xl font-bold mb-4 text-left titles">Education</h1>
            <br />
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                {Object.keys(educationData).map((school, index) => (
                    <li key={school}>
                        <div className="timeline-middle">
                            <div className="avatar">
                                <div className="w-20 rounded-full bg-cover bg-center bg-no-repeat bg-white" style={{ backgroundImage: `url(${educationData[school].image})`, backgroundSize: '90%' }} />
                            </div>
                        </div>
                        <div
                            className={`${index % 2 === 0
                                    ? "timeline-start md:text-end"
                                    : "timeline-end"
                                } pl-4 pr-4 pb-10`}
                        >
                            <time className="font-mono italic">
                                {educationData[school].start_date["month"]} {educationData[school].start_date["year"]} - {educationData[school].end_date["month"]} {educationData[school].end_date["year"]}
                            </time>
                            <div className="text-lg font-black text-custom-blue">
                                {educationData[school].title} 
                                <span className=" text-gray-400"> - </span>
                                <a
                                    className="link link-hover text-gray-400"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={educationData[school].website}
                                >
                                    {school}
                                </a>
                            </div>
                            <div
                                className="mt-2"
                                dangerouslySetInnerHTML={{
                                    __html: educationData[school].description,
                                }}
                            />
                        </div>
                        {index !== Object.keys(educationData).length - 1 && (
                            <hr />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
