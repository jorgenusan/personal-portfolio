import projectsData from "@/data/ProjectsData";

export default function Projets() {
    return (
        <div className="flex flex-col w-full mt-1 mb-1 pl-8 pr-8 lg:pl-2 lg:pr-2 md:pl-2 md:pr-2">
            <h1 className="text-2xl font-bold mb-4 text-left titles">Projects</h1>
            <br />
            <div className="flex flex-wrap justify-center">
                {Object.keys(projectsData).map((projectKey) => (
                    <a key={projectKey} className="card w-80 lg:w-90 lg:ml-10 md:ml-5 shadow-custom-blue shadow-md flex mb-4 bg-custom-black" href={projectsData[projectKey].link} target="_blank" rel="noopener noreferrer">
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
