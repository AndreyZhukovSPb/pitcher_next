import Main from "../components/Main";
import Footer from "../components/Footer";
import { baseURL } from "../utils/constatnts";

const Index = ({ data }) => {

  return (
    <>
      <Main
        mainPictures={data.sellPictures.desctopPhoto}
        mainPicturesMobile={data.sellPictures.mobilePhoto}
        storesPictures={data.storesPictures}
        aboutInfo={data.aboutInfo}
        instaPhoto={data.instaPhoto && data.instaPhoto}
      />
      <Footer/>
    </>
  );
};

export default Index;

export async function getServerSideProps() {
  const res = await fetch(baseURL);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

/*
to-do: 
шрифты мейн
фавиконка
поменять base url на pitcherbar
проверить что ховеры ушли с мобилы и остались на десктопе
? _document.tsx удалить ? 


filally:
Консоль ошибки страницы кофеен, контакты
убрать все каменты
прикрутить статистику
прописать корс нормально

Потом: 
что лежит в headerType?
children: any CorouselBox
открыть ссылку на shop
сортировка css свойств
Посмотреть swiper для карусели
почитать react-map-gl и react-leaflet
типизировать useState, useEffect
переписать carouselProps - для функций
гид по завариванию
личный кабинет
timeout чтобы вернуть транзишн, так себе решение
карусель разнести на несколько компонентов

npm i cors - probably will be usefull
553648129
"homepage": "https://AndreyZhukovSPb.github.io/pitcher",    
*/



