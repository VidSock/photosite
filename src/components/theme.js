/** @jsx jsx */
import { jsx } from "theme-ui"
import { useColorMode } from "theme-ui"
import { FiMoon, FiSun } from "react-icons/fi"

const Theme = () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <div className="carto" sx={themeStyles.modeOption}>
      <button
        onClick={e => {
          setColorMode(colorMode === "default" ? "dark" : "default")
        }}
        aria-label="Theme Color"
      >
        <div sx={themeStyles.modeIcons}>
          <div>{colorMode === "default" ? <FiMoon /> : <FiSun />}</div>
          {/* <div sx={themeStyles.modeText}>
            {colorMode === "default" ? "Dark (best)" : "Light"}
          </div> */}
        </div>
      </button>
    </div>
  )
}
export default Theme

const themeStyles = {
  modeOption: {
    button: {
      fontSize: "28px",
      bg: "transparent",
      border: "none",
      cursor: "pointer",
      mt: "-2px",
      p: "0 20px 0 0",
      "&:hover": {
        color: "#bea9b3",
      },
    },
  },
  modeIcons: {
    display: "flex",
    alignItems: "center",
    color: "#ccc",
    mt: "10px",
  },
  modeText: {
    fontSize: "14px",
    display: ["block", "block", "block", "block"],
    p: " 0 10px",
    mt: "-5px",
    letterSpacing: "1px",
  },
}
