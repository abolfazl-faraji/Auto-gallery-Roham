import './style.css';
function Header(attrs:{
    autoGalleryLogo:any;
    autoGalleryName:string;
    autoGalleryPhoneNumber:string;
    instagramLogo:any;
    telegramLogo:any;
    instagramId:string;
    telegramId:string;
}){
    return (
        <header>
            <div className='header-right-div'>
                <img className='header-auto-gallery-logo' src={attrs.autoGalleryLogo} alt="Auto gallery logo" />
                <h3 className='header-auto-gallery-name'>{attrs.autoGalleryName}</h3>
            </div>
            <div className='header-center-div'>
                <h3 className='header-auto-gallery-welcome'>Welcome to {attrs.autoGalleryName} Auto Gallery</h3>
                <p className='header-auto-gallery-phone-number'>Phone number : {attrs.autoGalleryPhoneNumber}</p>
            </div>
            <div className='header-left-div'>
                <div className='header-left-div-instagram'>
                    <img className='header-left-div-instagram-logo' src={attrs.instagramLogo} alt="Instagram" />
                    <a className='header-left-div-instagram-link' href={'https://instagram.com/' + attrs.instagramId}>Instagram</a>
                </div>
                <div className='header-left-div-telegram'>
                    <img className='header-left-div-telegram-logo' src={attrs.telegramLogo} alt="Telegram" />
                    <a className='header-left-div-telegram-link' href={'https://t.me/' + attrs.telegramId}>Telegram</a>
                </div>
            </div>
        </header>
    );
}
export default Header;