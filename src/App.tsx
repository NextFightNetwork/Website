import ButtonComponent from "./components/ButtonComponent.tsx";

function App() {

  return (
    <div>
        <div className="background-container">
            <img src="../public/background.png" alt="background" className="background-image" />
            <div className="background-overlay"></div>
        </div>
        <img src="../public/banner.png" alt="banner" className="banner"/>
        <div className="main-button-container">
            <ButtonComponent title="Discord" onClick={() => window.open("https://discord.gg/ZXvGT8uMD3", '_blank')}/>
            <ButtonComponent title="Github" onClick={() => window.open("https://github.com/NextFightNetwork", '_blank')}/>
        </div>
    </div>
  )
}

export default App
