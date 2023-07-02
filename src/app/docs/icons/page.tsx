"use client";

import * as Icons from "@flowui/react/icons";
import type { SVGProps } from "@flowui/react/icons";
import { useCallback, useMemo, useState } from "react";
import { useCopyToClipboard, useDebounce, useIsMounted } from "usehooks-ts";
import { capitalCase } from "change-case";
import { Row, Column, Grid, Card } from "@flowui/react/layout";
import { Text } from "@flowui/react/basic";
import { Input } from "@flowui/react/forms";
import clsx from "clsx";

type Icon = (props: SVGProps) => JSX.Element;

// A dirty workaround to prevent icon name mangling!
const icons: [name: string, icon: Icon][] = [
  ["AngleDown", Icons.IconAngleDown],
  ["AngleDownSmall", Icons.IconAngleDownSmall],
  ["AngleLeft", Icons.IconAngleLeft],
  ["AngleLeftSmall", Icons.IconAngleLeftSmall],
  ["AngleRight", Icons.IconAngleRight],
  ["AngleRightSmall", Icons.IconAngleRightSmall],
  ["AngleUp", Icons.IconAngleUp],
  ["AngleUpSmall", Icons.IconAngleUpSmall],
  ["ArrowDown", Icons.IconArrowDown],
  ["ArrowDownSmall", Icons.IconArrowDownSmall],
  ["ArrowLeft", Icons.IconArrowLeft],
  ["ArrowLeftSmall", Icons.IconArrowLeftSmall],
  ["ArrowRight", Icons.IconArrowRight],
  ["ArrowRightSmall", Icons.IconArrowRightSmall],
  ["ArrowUp", Icons.IconArrowUp],
  ["ArrowUpSmall", Icons.IconArrowUpSmall],
  ["Asterisk", Icons.IconAsterisk],
  ["At", Icons.IconAt],
  ["Bars", Icons.IconBars],
  ["Bell", Icons.IconBell],
  ["Bold", Icons.IconBold],
  ["BookOpen", Icons.IconBookOpen],
  ["Circle", Icons.IconCircle],
  ["Code", Icons.IconCode],
  ["Cross", Icons.IconCross],
  ["CrossCircle", Icons.IconCrossCircle],
  ["CrossSmall", Icons.IconCrossSmall],
  ["Document", Icons.IconDocument],
  ["Edit", Icons.IconEdit],
  ["Exit", Icons.IconExit],
  ["Eye", Icons.IconEye],
  ["EyeCrossed", Icons.IconEyeCrossed],
  ["Form", Icons.IconForm],
  ["Github", Icons.IconGithub],
  ["IconStar", Icons.IconIconStar],
  ["Info", Icons.IconInfo],
  ["Input", Icons.IconInput],
  ["Italic", Icons.IconItalic],
  ["KeyboardShortcut", Icons.IconKeyboardShortcut],
  ["Layout", Icons.IconLayout],
  ["Link", Icons.IconLink],
  ["Loading", Icons.IconLoading],
  ["Lock", Icons.IconLock],
  ["Moon", Icons.IconMoon],
  ["MoreHorizontal", Icons.IconMoreHorizontal],
  ["MoreVertical", Icons.IconMoreVertical],
  ["Power", Icons.IconPower],
  ["Question", Icons.IconQuestion],
  ["QuestionSquare", Icons.IconQuestionSquare],
  ["Search", Icons.IconSearch],
  ["Smile", Icons.IconSmile],
  ["Spinner", Icons.IconSpinner],
  ["Sun", Icons.IconSun],
  ["Support", Icons.IconSupport],
  ["Settings", Icons.IconSettings],
  ["System", Icons.IconSystem],
  ["Trash", Icons.IconTrash],
  ["User", Icons.IconUser],
  ["ZoomIn", Icons.IconZoomIn],
  ["ZoomOut", Icons.IconZoomOut],
];

function IconCard({ name, icon: Icon }: { name: string; icon: Icon }) {
  const [, copyFn] = useCopyToClipboard();
  const [copied, setCopied] = useState(false);
  const isMounted = useIsMounted();

  const copy = useCallback(async () => {
    await copyFn(name);
    setCopied(true);
    setTimeout(() => {
      if (isMounted()) {
        setCopied(false);
      }
    }, 2000);
  }, [copyFn, name, isMounted]);

  return (
    <button onClick={copy}>
      <Card
        customClassName={clsx(
          "w-32 h-32 p-3 hover:bg-basic-50 dark:hover:bg-basic-800",
          {
            "!bg-success-200 dark:!bg-success-800": copied,
          },
        )}
      >
        <Column expand items="center" justify="center">
          <Row expand items="center">
            <Icon />
          </Row>
          <Row expand items="center">
            <Text size="sm" color="basic" align="center">
              {copied ? "Copied!" : capitalCase(name)}
            </Text>
          </Row>
        </Column>
      </Card>
    </button>
  );
}

function IconsPage() {
  const [search, setSearch] = useState("");
  const debounceSearch = useDebounce(search);

  const filtered = useMemo(() => {
    return icons.filter(
      ([name]) =>
        !debounceSearch ||
        name.toLowerCase().includes(debounceSearch.toLowerCase()),
    );
  }, [debounceSearch]);

  const handleSearchChange = useCallback((value: string) => {
    setSearch(value);
  }, []);

  const handleClearSearch = useCallback(() => {
    setSearch("");
  }, []);

  return (
    <Column gap={12}>
      <Row customClassName="w-60">
        <Text as="h1" size="5xl">
          Icons
        </Text>
      </Row>
      <Row customClassName="w-60">
        <Input
          name="search"
          placeholder="Find icon..."
          leadingIcon={<Icons.IconSearch />}
          value={search}
          onChange={handleSearchChange}
          onClear={handleClearSearch}
          clearable
        />
      </Row>
      <Grid gap="6">
        {filtered.map(([name, icon]) => (
          <IconCard key={name} name={name} icon={icon} />
        ))}
      </Grid>
    </Column>
  );
}

// noinspection JSUnusedGlobalSymbols
export default IconsPage;
