import SocialMediaLinks from "../pages/SocialMediaLinks";
import meData from "@/data/MeData";

export default function Title() {
    const profile = meData["Jorge"];

    return (
        <div className="w-full flex flex-wrap lg:flex-row justify-center items-center">
            <div className="avatar border border-hidden flex flex-col lg:flex-row">
                <div className="w-24 lg:w-80 md:w-60 rounded-full">
                    <img src={profile.image} alt={profile.name} />
                </div>
            </div>
            <div className="flex flex-col text-center justify-center md:ml-10 sm:ml-4 lg:ml-20 mt-4 lg:mt-0">
                <h1 className="lg:text-5xl md:text-4xl sm:text-2xl lg:mb-5 font-bold text-custom-blue">{profile.name}</h1>
                <h2 className="lg:text-xl lg:mb-2">{profile.jobTitle}, {profile.company}</h2>
                <div className="flex justify-center mt-5">
                    <SocialMediaLinks />
                </div>
            </div>

        </div>
    )
}
