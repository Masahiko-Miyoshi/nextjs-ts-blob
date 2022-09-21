import { Contents } from '@/components/app/Contents';
import { Header } from '@/components/app/Header';
import {useHeaderScroll} from '@/hooks/useHeaderScroll';
import { Provider } from '@/providers/app';
import type { AppPropsWithLayout } from 'next/app';
import '@/styles/app.css';


type Props = {
  page: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
};




const DefaultLayout = ({ page }: Props) => {
  const  isActive  = useHeaderScroll();
  console.log("DEBUG ******* Default layout! *********"+isActive);
  return(
  <div className="global-layout">
    <Header className="global-layout__header" show={isActive} />
    <Contents className="global-layout__contents">{page}</Contents>
  </div>
  )
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  console.log("DEBUG <<<<<<<<<<<<<<<<<<<<<<<Init page by MyApp !>>>>>>>>>>>>>>>>>>>>>>>");
  const getLayout =
    Component.getLayout ?? ((page) => <DefaultLayout page={page} />);

  return <Provider>{getLayout(<Component {...pageProps} />)}</Provider>;
}

export default MyApp;
