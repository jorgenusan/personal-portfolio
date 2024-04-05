import SocialMediaLinks from "../pages/SocialMediaLinks"

export default function Footer() {
  return <footer className="footer items-center p-4 bg-neutral text-neutral-content lg:pl-10 lg:pr-10 xl:pl-20 xl:pr-20 2xl:pl-80 2xl:pr-80 md:pl-10 md:pr-10">
    <aside className="items-center grid-flow-col">
      <a className="link link-hover text-gray-400" href="/">Jorge Núñez Santiago</a>
    </aside>
    <nav className="grid-flow-col md:place-self-center md:justify-self-end">
      <SocialMediaLinks />
    </nav>
  </footer>
}