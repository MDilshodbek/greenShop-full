const Slider1 = () => {
  return (
    <div className="w-full h-[450px] flex">
      <div className="w-[60%] pl-[43px] pt-[68px]">
        <h5 className="font-medium pb-[7px]">WELCOME TO GREENSHOP</h5>
        <h1 className="font-black text-[70px] leading-[70px] pb-[5px]">
          LET'S MAKE A BETTER <span className="text-[#46A358]">PLANET</span>
        </h1>
        <p>
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants!
        </p>
        <button
          type="button"
          className="w-[100px] h-[36px] bg-[#46A358] rounded-md flex items-center justify-center text-white gap-2 cursor-pointer mt-[48px]"
        >
          SHOP NOW
        </button>
      </div>
      <div className="w-[40%] flex items-center justify-center relative">
        <img
          src="https://s3-alpha-sig.figma.com/img/4575/e3df/52fa214db1f3ce519277860c13b11e21?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aRMZkAZwQUyd-JFBpGDXXTRU0Sx-2ZhGg9HhFgio5G0~VimZoHvdKVwsbZXOjfEswkI7BipINV-RDUymEwq0ooq85V8W2hfZtrj3fLZw1alVy40N8evZXmnfqRGqmL9NPOND8GVKY6s9QVlJrQZsl56WguKBDl1KSMRt8sJCowp4muf5Vq8pU-PE1a50gukyWNTbnogGhNn9PjU81bKwAR0KVJxpn6SKBD0M7WG0RU7W4g0F9jvw6~GtxlZ5DdAwQhiNEO-NRVoAAFxkwGiTeruwoe2OnAmRIZjyIxKe5W4ECLkPsN9PntnUu3~hkidtDnp8ub~7V~~0dnsvAyzkIw__"
          alt=""
        />
        <img
          className="absolute w-[135px] h-[135px] bottom-[37px] left-[25px]"
          src="https://s3-alpha-sig.figma.com/img/4575/e3df/52fa214db1f3ce519277860c13b11e21?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aRMZkAZwQUyd-JFBpGDXXTRU0Sx-2ZhGg9HhFgio5G0~VimZoHvdKVwsbZXOjfEswkI7BipINV-RDUymEwq0ooq85V8W2hfZtrj3fLZw1alVy40N8evZXmnfqRGqmL9NPOND8GVKY6s9QVlJrQZsl56WguKBDl1KSMRt8sJCowp4muf5Vq8pU-PE1a50gukyWNTbnogGhNn9PjU81bKwAR0KVJxpn6SKBD0M7WG0RU7W4g0F9jvw6~GtxlZ5DdAwQhiNEO-NRVoAAFxkwGiTeruwoe2OnAmRIZjyIxKe5W4ECLkPsN9PntnUu3~hkidtDnp8ub~7V~~0dnsvAyzkIw__"
          alt=""
        />
      </div>
    </div>
  );
};

export default Slider1;
