import ContentBot from "./ContentBot";
import ContentTop from "./ContentTop";

export default function Content() {
    return (
        <>
            <div className="container">
                <ContentTop />
                <ContentBot />
            </div>
        </>
    );
}
