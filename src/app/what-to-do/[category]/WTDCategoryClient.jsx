'use client';
import "../../globals.css";
import { getDataByContentType } from '../../components/Utils/dataMapper';
import Navbar from "../../components/Navigation/Navbar/Navbar";
import TopSections from '../../components/Main/Top_Sections_box/TopSections';
import Footer from "../../components/Navigation/Footer/Footer";
import ArticleList from "../../components/Articles/Article_List/ArticleList";

export default async function WTDCategoryClient({ section }) {
  const sec = await section;
  // console.log('Rendering detail for section:', sec);

  if (!section) {
    return (
      <div className="LandingBox">
        <Navbar />
        <div>Раздел не найден</div>
        <Footer />
      </div>
    );
  }

  const data = getDataByContentType(section.contentType);
  // console.log('Loaded data:', data);

  return (
    <div className="LandingBox">
      <Navbar />
      <TopSections
        displayMode="solo"
        soloImage={section.cover}
        soloText={section.description}
        button_text="Вернуться назад"
        onButtonClick={() => {window.location.href = '/what-to-do'}}
      />

      {data && data.length > 0 ? (
        <ArticleList
          articles={data}
          renderStyle="catalog"
          contentType={section.contentType}
        />
      ) : (
        <div className="no-data-message">
          Нет данных для отображения
        </div>
      )}

      <Footer />
    </div>
  );
}
