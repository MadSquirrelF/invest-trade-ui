import { getAddUrl, getNewUrl, getWorkUrl } from 'config/url.config';
import { GetStaticProps, NextPage } from 'next';
import Home from '@/components/screens/home/Home';
import { IHome } from '@/components/screens/home/Home.interface';

import { INewItem } from '@/components/ui/NewsMain/new.interface';
import { ISlide } from '@/components/ui/slider/slider.interface';
import { AddService } from '@/services/add.service';
import { NewService } from '@/services/new.service';
import { WorkService } from '@/services/work.service';
import { IAdds } from '@/shared/types/product.types';

const HomePage: NextPage<IHome> = ({ slides, Adds, news }) => (
  <Home
    Adds={Adds}
    slides={slides}
    news={news}
  />
);

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: dataWorks } = await WorkService.getAll();

    const slides: ISlide[] = dataWorks.map((slide) => ({
      _id: slide._id,
      link: getWorkUrl(slide.slug),
      poster: slide.poster,
      description_short: slide.description_short,
      description_full: slide.description_full,
      image_1: slide.image_1,
      image_2: slide.image_2,
      image_3: slide.image_3,
      image_4: slide.image_4,
      image_5: slide.image_5,
      image_6: slide.image_6,
      title: slide.title,
    }));

    const { data: dataNews } = await NewService.getAll();

    const news: INewItem[] = dataNews.map((item) => ({
      _id: item._id,
      link: getNewUrl(item.slug),
      image_1: item.image_1,
      image_2: item.image_2,
      image_3: item.image_3,
      description_short: item.description_short,
      description_full: item.description_full,
      title: item.title,
      username: item.username,
      createdAt: item.createdAt,
      countOpened: item.countOpened,
    }));

    const { data: dataAdds } = await AddService.getAll();

    const Adds: IAdds[] = dataAdds.map((a) => ({
      _id: a._id,
      name: a.name,
      slug: getAddUrl(a.slug),
      price: a.price,
      photo: a.photo,
    }));

    return {
      props: {
        slides,
        Adds,
        news,
      } as IHome,
      revalidate: 60,
    };
  } catch (error) {
    return {
      props: {
        slides: [],
        Adds: [],
        news: [],
      },
    };
  }
};

export default HomePage;
