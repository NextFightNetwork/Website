
import ImageButtonComponent from "./components/ImageButtonComponent.tsx";

function App() {
  return (
    <div>
        <div className="parallax">
            <header className="primary-header">
            </header>

            <div className="main-selection">
                <ImageButtonComponent
                    title="Shop"
                    className="selection-button"
                    onClick={() =>
                        window.open("https://discord.gg/ZXvGT8uMD3", "_blank")
                    }
                    imagePath="menu/shop.png"
                />
                <ImageButtonComponent
                    title="Games"
                    className="selection-button"
                    onClick={() =>
                        window.open("https://discord.gg/ZXvGT8uMD3", "_blank")
                    }
                    imagePath="menu/games.png"
                />
                <ImageButtonComponent
                    title="Profile"
                    className="selection-button"
                    onClick={() =>
                        window.open("https://discord.gg/ZXvGT8uMD3", "_blank")
                    }
                    imagePath="menu/profile.png"
                />
            </div>

            <img src="../public/parallax/layer_1.png" className="background layer_1"/>
            <img src="../public/parallax/layer_2.png" className="background layer_2"/>
            <img src="../public/parallax/layer_3.png" className="background layer_3"/>
            <img
                className="parallax__foreground-front"
                src="../public/foreground.png"
                alt=""
            />
        </div>
        <div className="main-content">
            <div className="main-button-container">

            </div>
        </div>
    </div>
  );
}

export default App;
