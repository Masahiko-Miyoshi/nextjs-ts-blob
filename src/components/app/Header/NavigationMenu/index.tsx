import { ContentList, ScrollList } from '@/components/app/Header/NavigationMenu/ContentList';
import {
  NavigationMenu,
  NavigationMenuLinkItem,
  NavigationMenuTriggerItem,
} from '@/components/common/NavigationMenu/index';
import { categoryList,scrollList } from '../config/categoryList';
import { tagList } from '../config/tagList';

export const Menu = () => {


  return (
    <NavigationMenu>
      {/* <Scroll to="posts" smooth={true} duration={500} className = "test2css">
          Concept
      </Scroll> */}
      <NavigationMenuLinkItem href="/" inner >
        Dash board
      </NavigationMenuLinkItem>

      <NavigationMenuTriggerItem title="Error status" >
        <ScrollList scrollList={scrollList} />
      </NavigationMenuTriggerItem>
      <NavigationMenuTriggerItem title="Data" >
        <ContentList contentList={categoryList} />
      </NavigationMenuTriggerItem>
      <NavigationMenuLinkItem href="/" inner >
        Bot
      </NavigationMenuLinkItem>
      <NavigationMenuTriggerItem title="Setting" >
        <ContentList contentList={tagList} />
      </NavigationMenuTriggerItem>
    </NavigationMenu>
  );
};
