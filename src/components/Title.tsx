import SocialMediaLinks from "../pages/SocialMediaLinks";
import meData from "@/data/MeData";

export default function Title() {
    const profile = meData["Jorge"];

    return (
        <div className="w-full flex flex-wrap lg:flex-row justify-center items-center pl-4 pr-4">
            <div className="avatar flex flex-col">
                <div className="w-40 lg:w-80 md:w-60 rounded-full">
                    <img src={profile.image} alt={profile.name} />
                </div>
            </div>
            <div className="flex flex-col text-center md:pl-10 sm:pl-4 lg:pl-20 md:pt-4 mt-4 lg:mt-0">
                <h1 className="lg:text-5xl md:text-4xl text-2xl lg:mb-5 font-bold text-custom-blue">{profile.name}</h1>
                <h2 className="lg:text-xl lg:mb-2">{profile.jobTitle}, {profile.company}</h2>
                <div className="flex flex-row justify-center mt-5">
                    <SocialMediaLinks />
                </div>
            </div>
        </div>
    )
}
