import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Icon } from '@/components/common/Icon';
import { Wrap } from '@/components/common/Layout';
import { OuterLink } from '@/components/common/Link';

export const IconGroup = () => (
  <Wrap gap="5">
    <OuterLink aria-label="github" href="https://github.com/">
      <Icon size="2">
        <FaGithub />
      </Icon>
    </OuterLink>
    <OuterLink aria-label="twitter" href="https://twitter.com/">
      <Icon size="2">
        <FaTwitter />
      </Icon>
    </OuterLink>
    <OuterLink aria-label="instagram" href="https://www.instagram.com/">
      <Icon size="2">
        <FaInstagram />
      </Icon>
    </OuterLink>
  </Wrap>
);
