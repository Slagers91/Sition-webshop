import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-7xl px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="https://portfolio.ruudslagers.nl" legacyBehavior>
            <a className="text-2xl font-bold text-gray-900 cursor-pointer">
              Ruud<span className="text-cyan">React</span>
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
