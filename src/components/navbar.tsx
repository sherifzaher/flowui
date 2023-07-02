import { indices } from "@/utils/array";
import { Row } from "@flowui/react/layout";
import { Button, Link, Text } from "@flowui/react/basic";
import { Chip } from "@flowui/react/data";
import { DarkModeSwitch } from "./dark-mode-switch";
import { NavbarLink, type NavbarLinkProps } from "./navbar-link";
import styles from "./navbar.module.scss";
import Image from "next/image";

function Navbar({ lastKnownColorScheme }: { lastKnownColorScheme: string }) {
  return (
    <Row justify="center" customClassName={styles.navbar}>
      <Row items="center" justify="between" customClassName="container">
        <Row items="center" gap={1}>
          <Link href="/" size="3xl" weight="light" color="basic">
            FlowUI
          </Link>
          <Chip size="xs" color="primary">
            Beta
          </Chip>
        </Row>
        <Row items="center" gap="6">
          <Row items="center" gap="2">
            {links.map((link, index) => (
              <Row key={link.href} gap="2" items="center">
                <NavbarLink {...link} />
                {indices(links).includes(index) && (
                  <Text
                    size="xs"
                    customClassName="select-none cursor-default opacity-25 dark:opacity-35"
                  >
                    &#x2022;
                  </Text>
                )}
              </Row>
            ))}
          </Row>
          <Button as="a" circle iconOnly variant="text" color="basic">
            <Image
              src="/icons/github/github-mark-white.svg"
              alt="Github"
              width={98 / 4}
              height={96 / 4}
            />
          </Button>
          <DarkModeSwitch lastKnownColorScheme={lastKnownColorScheme} />
        </Row>
      </Row>
    </Row>
  );
}

const links: NavbarLinkProps[] = [
  { label: "Docs", href: "/docs" },
  { label: "Blog", href: "/blog" },
  { label: "About FlowUI", href: "/about" },
  { label: "Feedback", href: "/feedback" },
];

export default Navbar;
