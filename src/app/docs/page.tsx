import { Column } from "@flowui/react/layout";
import { Text } from "@flowui/react/basic";

function OverviewPage() {
  return (
    <Column gap={6}>
      <Text size="2xl">FlowUI</Text>
      <Text>
        <Text as="span" color="primary">
          FlowUI
        </Text>{" "}
        is a React components library that is built on top of{" "}
        <a href="https://tailwindcss.com" target="_blank">
          <Text as="span" color="primary">
            Tailwindcss
          </Text>
        </a>{" "}
        and designed to work seamlessly with{" "}
        <a href="https://nextjs.org" target="_blank">
          <Text as="span" color="primary">
            Next.js
          </Text>
        </a>{" "}
        and the new Next.js{" "}
        <a href="https://nextjs.org/docs/app" target="_blank">
          <Text as="span" color="primary">
            App Router
          </Text>
        </a>
        . This library provides a comprehensive collection of customizable UI
        components that make it easy to create beautiful and responsive web
        applications.
      </Text>
      <Text>
        The components in FlowUI are designed to be highly modular, making it
        easy to configure and customize them to fit the specific needs of an
        application. This makes it possible to create unique and engaging user
        interfaces that are tailored to the requirements of individual projects.
      </Text>
      <Text>
        FlowUI is optimized for use with Next.js, which is a popular framework
        for building server-rendered React applications. The library is fully
        compatible with the new Next.js app directory, which provides a
        standardized structure for organizing Next.js projects. This makes it
        easy to integrate the components into an existing Next.js project and
        start building beautiful user interfaces right away.
      </Text>
      <Text>
        The components in FlowUI are also designed to be highly performant,
        ensuring that applications built with the library are fast and
        responsive. The library is built using modern web development best
        practices, such as lazy loading and code splitting, to ensure that only
        the necessary components are loaded when they are needed.
      </Text>
      <Text>
        Overall, FlowUI is a powerful React components library that is built
        specifically for use with Next.js and the new Next.js app directory.
        With its comprehensive collection of customizable UI components and its
        focus on performance, it is an excellent choice for building modern web
        applications that are both beautiful and fast.
      </Text>
    </Column>
  );
}

// noinspection JSUnusedGlobalSymbols
export default OverviewPage;
