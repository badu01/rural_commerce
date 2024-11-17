function Footer() {
  return (
    <footer
      className="absolute bottom-0 left-0 right-0 z-50 text-white text-center h-52"
      style={{
        background:
          "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",
      }}
    >
      <p className="absolute bottom-2 left-0 right-0 text-sm">
        &copy;Build for Davinci conducted by{" "}
        <span className="text-orangeMain">
          <a href="https://l.instagram.com/?u=https%3A%2F%2Fdiscord.gg%2FxznnmfGCer&e=AT1dsyx0LBOKrH3b-BbWb-qUlil2IDTtuJyav2KMTbu8SHSu8O6F9QUWkWnlbSfX4jkVG96NzXhRu4jbVXyVmENC7DYEh7yo">
            ThinkerHub GEC
          </a>
        </span>
      </p>
    </footer>
  );
}

export default Footer;
