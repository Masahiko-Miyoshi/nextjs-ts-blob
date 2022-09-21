import { Portal } from '@radix-ui/react-portal';
import { GiHamburgerMenu } from 'react-icons/gi';
import { SiHomeadvisor } from 'react-icons/si';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/common/Dialog';
import { IconButton } from '@/components/common/IconButton';
import { Box } from '@/components/common/Layout';
import { NavigationBarLabel } from '@/components/common/NavigationBar';
import { ScrollArea } from '@/components/common/ScrollArea';
import { categoryList } from '../config/categoryList';
import { tagList } from '../config/tagList';
import { ContentList, ContentListItem } from './ContentList';

export const HamburgerMenu = () => (
  <Portal>
    <Box css={{ position: 'fixed', bottom: '$4', right: '$4' }}>
      <Dialog>
        <DialogTrigger asChild>
          <IconButton
            aria-label="hamburger menu"
            size="2"
            float
            icon={<GiHamburgerMenu />}
          />
        </DialogTrigger>
        <DialogContent css={{ maxW: '80vw', pt: 40 }}>
          <ScrollArea css={{ height: '70vh' }}>
            <nav>
              <Box as="ul">
                <NavigationBarLabel>Home</NavigationBarLabel>
                <ContentListItem
                  href="/"
                  title="Home"
                  icon={<SiHomeadvisor />}
                />
                <NavigationBarLabel>Category</NavigationBarLabel>
                <ContentList contentList={categoryList} />
                <NavigationBarLabel>Tag</NavigationBarLabel>
                <ContentList contentList={tagList} />
              </Box>
            </nav>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </Box>
  </Portal>
);
