const Footer = () => {
  return (
    <div className="flex justify-between m-6">
      <p className="text-xs font-semibold text-gray-600">
        Made with ❤️ by [brunoalfred](https://github.com/brunoalfred)
      </p>
      <div className="flex gap-3 ml-4">
        <a href="https://twitter.com/brunoalfred" className="max-w-xs ml-4">
          <img src="/twitter.svg" alt="Twitter" />
        </a>
        <a href="#" className="ml-3">
          <img src="/facebook.svg" alt="Facebook" />
        </a>
        <a
          href="https://github.com/brunoalfred"
          className="ml-3"
        >
          <img src="/github.svg" alt="GitHub" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
