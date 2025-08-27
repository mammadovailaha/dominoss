const PlayStore = ({playwidth, storewidth}) => {
  return (
    <div className="flex">
      <a
        href="https://play.google.com/store/apps/details?id=com.dominospizza.az"
        target="_blank"
        className="flex items-center h-[70px]"
      >
        <img
          className={`grayscale hover:grayscale-0 ${playwidth} max-h-full`}
          src="./img/google-play.png"
          alt="Google Play"
        />
      </a>
      <a
        href="https://apps.apple.com/us/app/dominos-pizza-azerbaijan/id1535012493"
        target="_blank"
        className="flex items-center h-[70px]"
      >
        <img
          className={`grayscale hover:grayscale-0 ${storewidth} max-h-full`}
          src="./img/app-store.svg"
          alt="App Store"
        />
      </a>
      <a
        href="https://appgallery.huawei.com/app/C104470921"
        target="_blank"
        className="flex items-center h-[70px]"
      >
        <img
          className={`ml-[11px] grayscale hover:grayscale-0 ${storewidth} max-h-full`}
          src="./img/app-gallery.png"
          alt="AppGallery"
        />
      </a>
    </div>
  );
};
export {PlayStore};