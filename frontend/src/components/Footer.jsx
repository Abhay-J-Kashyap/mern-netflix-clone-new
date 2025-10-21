const Footer = () => {
  return (
    <footer className="py-6 md:px-8 md:py-0 bg-[#141414] text-white border-t border-gray-800">
      <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{' '}
          <a
            href="https://github.com/Abhay-J-Kashyap"
            target="_blank"
            className="font-medium underline underline-offset-4"
          >
            Abhay J Kashyap
          </a>
          . The source code is available on{' '}
          <a
            href="https://github.com/Abhay-J-Kashyap/mern-netflix-clone-new"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
};
export default Footer;
