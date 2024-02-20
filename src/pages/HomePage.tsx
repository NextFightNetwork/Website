//import { useRef, useState } from "react";
import ImageButtonComponent from "../components/ImageButtonComponent.tsx";
import {useEffect, useState} from "react";
import '../assets/css/pages/home.css'

function HomePage() {

    const [playersOnline, setPlayersOnline] = useState(null);

    useEffect(() => {
        async function fetchPlayersOnline() {
            try {
                const response = await fetch("https://mcapi.us/server/status?ip=nextfight.net");
                if (response.ok) {
                    const data = await response.json();
                    const { players } = data;
                    const numberOfPlayers = players ? players.now : null;
                    setPlayersOnline(numberOfPlayers);
                } else {
                    throw new Error("Failed to fetch players online");
                }
            } catch (error) {
                console.error(error);
                // Handle error
            }
        }

        fetchPlayersOnline();
    }, []);


    /*const codeToCopy = "#test1234";

    const [showNotification, setShowNotification] = useState(false);
    const codeRef = useRef(null);

    const copyCodeToClipboard = () => {
        selectCode();
        if (codeRef.current) {
            navigator.clipboard.writeText(codeToCopy);
            // Notification
        }
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 2000);
    };

    const selectCode = () => {
        if (codeRef.current) {
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(codeRef.current);
            if(selection != null) {
                selection.removeAllRanges();
                selection.addRange(range);
            }
        }
    };*/
    return (
        <div className="container">

            {/* <div className="background-filler">
            <div className="rounded-bg">
                <h2>Join the server and send this code in the chat</h2>
                <pre onClick={selectCode} ref={codeRef}>{codeToCopy}</pre>
                <button className="blurred-button" onClick={copyCodeToClipboard}>Copy Code</button>
                {showNotification && <p>Copied code to clipboard!</p>}
            </div>
        </div> */}

            <div className="parallax">
                <header className="primary-header">
                </header>
                <p className="players-online">Players online: {playersOnline !== null ? playersOnline : "Loading..."}</p>
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

export default HomePage;