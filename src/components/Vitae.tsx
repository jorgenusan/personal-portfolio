import companiesData from "@/data/CompaniesData"

export default function Vitae() {
    return (
        <div className="flex flex-col w-full mt-1 mb-1">
            <h1 className="text-2xl font-bold mb-4 text-left">Vitae</h1>
            <br />
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            {Object.keys(companiesData).map((company, index) => (
                <li key={company}>
                    <div className="timeline-middle">
                    <div className="avatar">
                        <div className="w-20 rounded-full">
                            <img src={companiesData[company].image} />
                        </div>
                        </div>
                    </div>
                    <div className={`timeline-${index % 2 === 0 ? 'start' : 'end'} md:text-${index % 2 === 0 ? 'end' : 'start'} mb-10 ml-4 mr-4`}>
                        <time className="font-mono italic">
                            {companiesData[company].time}
                        </time>
                        <div className="text-lg font-black">
                            {companiesData[company].title} - <a className="link link-hover text-custom-blue" target="_blank" rel="noopener noreferrer" href={companiesData[company].website}>{company}</a>
                        </div>
                        <div className="mt-2" dangerouslySetInnerHTML={{ __html: companiesData[company].description }} />
                    </div>
                    <hr />
                </li>
            ))}
        </ul>
    </div>
    )
}