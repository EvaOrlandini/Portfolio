import dashlyVideo from '../../assets/videos/dashly.mov';

const Bantu = () => {
  return (
    <div>
      <div className="flex flex-row">
        <h3 className="text-2xl font-bold mb-4">Bantu</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">React</span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Node.js</span>
        </div>
      </div>
      <div className="relative w-full aspect-[16/10] mb-4 bg-gray-200">
        <video
          className="w-full h-full object-cover rounded-lg"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={dashlyVideo} type="video/quicktime" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </div>
      <p className="mb-4 text-sm">Bantu is a community-driven platform designed to improve accessibility and inclusivity for visually impaired individuals in Bali. The platform connects users with local service providers while empowering professionals to showcase their skills.</p>
      <p className="mb-4 text-sm">This project was completed in just one week by a team of five, demonstrating our ability to work as a cohesive unit and deliver meaningful results under tight time constraints. As the front-end lead, I leveraged Bootstrap to design an intuitive and user-friendly interface tailored to the specific needs of the target audience. Like Dashly, the site was built with a desktop-first approach.</p>

      <div className="flex gap-4">
        <a
          href="https://github.com/..."
          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://demo..."
          className="px-4 py-2 border border-black rounded-lg hover:bg-gray-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
      </div>
    </div>
  );
};

export default Bantu;
