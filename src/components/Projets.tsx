import projectsData from "@/data/ProjectsData";

export default function Projets() {
    return (
        <div className="flex flex-col w-full mt-1 mb-1 pl-3 pr-3">
            <h1 className="text-2xl font-bold mb-4 text-left">Projects</h1>
            <br />
            <div className="flex flex-wrap justify-center lg:space-x-20 md:space-x-10">
                {Object.keys(projectsData).map((projectKey) => (
                    <a key={projectKey} className="card w-80 lg:w-90 bg-base-100 shadow-xl flex mb-4" href={projectsData[projectKey].link} target="_blank" rel="noopener noreferrer">
                        <figure>
                            <img
                                src={projectsData[projectKey].image}
                                alt={projectKey}
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-custom-blue">{projectKey}</h2>
                            <p>{projectsData[projectKey].description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>

    );
}
