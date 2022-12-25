import Indicator from "./Indicator";

const Navbar = () => {
  const styles = {
    navStyles: {
      display: "flex",
      justifyContent: "space-between",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      height: "60px",
      backgroundColor: "gray",
      zIndex: 2,
      padding: "10px 20px",
    },
    logoStyles: {
      display: "flex",
      fontSize: "2rem",
      fontWeight: 350,
      width: "20rem",
    },
    linkStyles: {
      display: "flex",
      gap: "5rem",
      justifyContent: "flex-end",
      listStyle: "none",
    },
  };
  return (
    <nav style={styles.navStyles}>
      <span style={styles.logoStyles}>Dherya Bengani</span>
      <ul style={styles.linkStyles}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <Indicator />
    </nav>
  );
};

export default Navbar;
