
function Footer() {
  return (
    <footer>
      <p className="credit">
        This site uses Google Analytics and Google Translate, and does not store
        any data.
      </p>
      <p className="credit">
        Click here to report an{" "}
        <a
          href="https://github.com/AccessiTech/know-your-rights/issues/new?template=Blank+issue"
          target="_blank"
          rel="noopener noreferrer"
        >
          Issue / Request
        </a>
        , join the{" "}
        <a
          href="https://github.com/AccessiTech/know-your-rights/discussions"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discussion
        </a>
        , or view the site's{" "}
        <a
          href="https://github.com/AccessiTech/know-your-rights"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository
        </a>
        .
      </p>
      <p className="credit">
        &copy; {new Date().getFullYear()} AccessiTech LLC
      </p>
    </footer>
  );
}

export default Footer;
