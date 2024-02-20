import Button from "../components/Button.tsx";
import '../assets/css/pages/notfound.css'

function NotFoundPage() {
    return (
        <div>
            <div className={"text-content-links"}>
                <p>404 Page not found!</p>
                <Button color={"danger"} onClick={() => null} buttonURL={"/"}>
                    Go back home
                </Button>
            </div>
        </div>
    );
}

export default NotFoundPage;