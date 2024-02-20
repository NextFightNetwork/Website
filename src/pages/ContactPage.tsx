import '../assets/css/pages/contact.css'
function ContactPage() {
    return (
        <div>
            <ContactInformation />
        </div>
    );
}

function ContactInformation() {
    return (
        <div className="text-content-container text-content-links">
            <h1>Contact</h1>
            <b>E-Mail:</b>
            <p>info@nextfight.net</p>

            <h1>Social Media</h1>
            <p>We are responsible for the following social media channels:</p>
            <ul>
                <li><a href="https://www.youtube.com/@nextfightnetwork">https://www.youtube.com/@nextfightnetwork</a></li>
                <li><a href="https://twitter.com/nextfight_net">https://twitter.com/nextfight_net</a></li>
                <li><a href="https://github.com/NextFightNetwork">https://github.com/NextFightNetwork</a></li>
                <li><a href="https://tiktok.com/@nextfight.net">https://tiktok.com/@nextfight.net</a></li>
                <li><a href="https://discord.nextfight.net">https://discord.nextfight.net</a></li>
                <li><a href="https://www.reddit.com/r/NextFightNetwork/">https://www.reddit.com/r/NextFightNetwork/</a></li>
            </ul>
            <h1>Domains</h1>
            <p>We are responsible for any subdomain of the domain nextfight.net. Including:</p>
            <ul>
                <li><a href="https://wiki.nextfight.net">https://wiki.nextfight.net</a></li>
                <li><a href="https://skins.nextfight.net">https://skins.nextfight.net</a></li>
                <li><a href="https://discord.nextfight.net">https://discord.nextfight.net</a></li>
                <li><a href="https://services.nextfight.net">https://services.nextfight.net</a></li>
            </ul>

            <h1>Other</h1>

            <b>Legal Notice:</b><p>For legal matters, please contact us at <a href="mailto:legal@nextfight.net">legal@nextfight.net</a></p>

            <b>Support</b><p>For any support-related issues, please direct your queries to <a href="mailto:support@nextfight.net">support@nextfight.net</a></p>
        </div>
    );
}


export default ContactPage;